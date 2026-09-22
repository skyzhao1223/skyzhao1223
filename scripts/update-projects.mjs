#!/usr/bin/env node
/**
 * Regenerate the bilingual project lists in README.md (between the PROJECTS
 * markers) from curation data in projects.json + live GitHub API data.
 *
 * Rules:
 * - Curated repos (entries in projects.json) always appear, in file order,
 *   with hand-written en/zh descriptions.
 * - Non-fork public repos created within AUTO_INCLUDE_DAYS that are not
 *   curated get auto-added: classified by topics/name, GitHub description.
 * - Star counts are live shields.io badges, so they never go stale.
 *
 * Zero dependencies; requires Node >= 18 (global fetch).
 * Optional GITHUB_TOKEN env var for higher API rate limits (set in CI).
 *
 * Usage: node scripts/update-projects.mjs [--check]
 *   --check   exit 1 if README.md would change; never writes (CI dry-run).
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const AUTO_INCLUDE_DAYS = 180;
const DESCR_LIMIT = 170;
const CATEGORY_PRIORITY = ['dsh', 'skills', 'mcp', 'resources'];

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(readFileSync(join(root, 'projects.json'), 'utf8'));
const readmePath = join(root, 'README.md');
const checkOnly = process.argv.includes('--check');

async function fetchRepos(username) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'profile-readme-sync',
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const out = [];
  for (let page = 1; page <= 10; page++) {
    const url =
      `https://api.github.com/users/${encodeURIComponent(username)}/repos` +
      `?per_page=100&page=${page}&type=owner&sort=created&direction=desc`;
    const res = await fetch(url, { headers });
    if (!res.ok) {
      throw new Error(`GitHub API ${res.status} ${res.statusText}: ${(await res.text()).slice(0, 300)}`);
    }
    const batch = await res.json();
    if (!Array.isArray(batch)) throw new Error('unexpected GitHub API response shape');
    out.push(...batch);
    if (batch.length < 100) break;
  }
  return out;
}

function classify(repo) {
  const name = repo.name.toLowerCase();
  const topics = (repo.topics || []).map((t) => String(t).toLowerCase());
  for (const cat of CATEGORY_PRIORITY) {
    const keys = (config.autoClassify && config.autoClassify[cat]) || [];
    if (topics.some((t) => keys.includes(t))) return cat;
  }
  if (name.startsWith('dsh-') || name.startsWith('dsh.')) return 'dsh';
  if (/(^|[-_])skills?([-_]|$)/.test(name)) return 'skills';
  if (name.includes('mcp')) return 'mcp';
  return config.fallbackCategory || 'resources';
}

function trimDescription(text) {
  if (!text) return '';
  const s = String(text).replace(/\s+/g, ' ').trim();
  if (s.length <= DESCR_LIMIT) return s;
  const head = s.slice(0, DESCR_LIMIT);
  const cut = Math.max(head.lastIndexOf(' '), head.lastIndexOf('，'), head.lastIndexOf('、'));
  return (cut > 80 ? head.slice(0, cut) : head) + '…';
}

function renderLang(lang, byCategory) {
  const lines = [];
  for (const cat of config.categories) {
    const entries = byCategory.get(cat.id) || [];
    if (!entries.length) continue;
    lines.push(`## ${cat.icon} ${cat[lang]}`, '');
    for (const { repo, meta } of entries) {
      const desc = (meta[lang] || meta.en || trimDescription(repo.description) || '—').trim();
      lines.push(`- **[${repo.name}](${repo.html_url})** — ${desc}`);
    }
    lines.push('');
  }
  return lines.join('\n').trim();
}

const repos = await fetchRepos(config.username);
const exclude = new Set(config.exclude || []);
const live = new Map(
  repos.filter((r) => !r.fork && !r.archived && !exclude.has(r.name)).map((r) => [r.name, r]),
);

const byCategory = new Map(config.categories.map((c) => [c.id, []]));
const ensureCategory = (id) => {
  if (!byCategory.has(id)) byCategory.set(id, []);
  return byCategory.get(id);
};

const warnings = [];
for (const [name, meta] of Object.entries(config.projects || {})) {
  const repo = live.get(name);
  if (!repo) {
    warnings.push(`curated repo "${name}" not found among public non-fork repos — skipped`);
    continue;
  }
  ensureCategory(meta.category || config.fallbackCategory || 'resources').push({ repo, meta });
}

const now = Date.now();
const autoAdded = [];
for (const [name, repo] of live) {
  if ((config.projects || {})[name]) continue;
  if (now - Date.parse(repo.created_at) > AUTO_INCLUDE_DAYS * 86400_000) continue;
  const catId = classify(repo);
  ensureCategory(catId).push({ repo, meta: {} });
  autoAdded.push(`${name} -> ${catId}`);
}

let readme = readFileSync(readmePath, 'utf8');
const original = readme;
for (const [tag, lang] of [['EN', 'en'], ['ZH', 'zh']]) {
  const start = `<!-- PROJECTS:${tag}:START -->`;
  const end = `<!-- PROJECTS:${tag}:END -->`;
  const i = readme.indexOf(start);
  const j = readme.indexOf(end);
  if (i === -1 || j === -1 || j < i) throw new Error(`README.md is missing markers for ${tag}`);
  readme = `${readme.slice(0, i + start.length)}\n${renderLang(lang, byCategory)}\n${readme.slice(j)}`;
}

if (checkOnly) {
  const changed = readme !== original;
  console.log(changed ? 'README.md would change' : 'README.md is up to date');
  process.exit(changed ? 1 : 0);
}

writeFileSync(readmePath, readme);
for (const w of warnings) console.warn(`warning: ${w}`);
console.log(
  `README.md updated — ${live.size} candidate repos, ${autoAdded.length} auto-added` +
    (autoAdded.length ? ` (${autoAdded.join(', ')})` : ''),
);
