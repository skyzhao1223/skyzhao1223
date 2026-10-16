<!-- Curation lives in projects.json; the weekly GitHub Action regenerates the list between the PROJECTS markers. -->

<div align="center">

[![Blog](https://img.shields.io/badge/Blog-zhaosky.cn-2ea44f?style=flat-square)](https://zhaosky.cn)
[![PyPI](https://img.shields.io/pypi/v/zspace-cli?style=flat-square&logo=pypi&logoColor=white&label=PyPI)](https://pypi.org/project/zspace-cli/)
[![OSS](https://img.shields.io/badge/OSS-23%20merged%20PRs-2ea44f?style=flat-square)](https://github.com/skyzhao1223/open-source-contributions)

</div>

Building agent skills, MCP servers and CLI tools that make AI agents useful in real daily workflows.

## 🌍 Open-Source Contributions

Merged work into repositories maintained by other teams — **23 PRs across 12 projects**, reviewed and merged by their maintainers.

| Project | Contribution |
|---|---|
| **[openclaw/openclaw](https://github.com/openclaw/openclaw)** · 392k★ | 3 merged fixes — credential-staging cleanup that masked the real setup result ([#172379](https://github.com/openclaw/openclaw/pull/172379)), pointless same-model retries on Chinese quota exhaustion ([#172173](https://github.com/openclaw/openclaw/pull/172173)), malformed redaction entries breaking the log pipeline ([#173471](https://github.com/openclaw/openclaw/pull/173471)) |
| **[anomalyco/opencode](https://github.com/anomalyco/opencode)** · 214k★ | Provider / PAT docs fixes and two dead links — [#42034](https://github.com/anomalyco/opencode/pull/42034) · [#42048](https://github.com/anomalyco/opencode/pull/42048) |
| **[labring/FastGPT](https://github.com/labring/FastGPT)** · 29.8k★ | Root-caused "exported backup cannot be re-imported"; zh-CN typography pass — [#7590](https://github.com/labring/FastGPT/pull/7590) · [#7591](https://github.com/labring/FastGPT/pull/7591) |
| **[esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)** · 35.8k★ | Fixed a permanent session hang when an SSE client attaches after an approval is queued — [#7708](https://github.com/esengine/DeepSeek-Reasonix/pull/7708) |
| **[Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft)** · 12k★ | Built its test & CI foundation from zero + `ClipCard` for real video footage — 6 merged PRs |
| **[zhinianboke/xianyu-auto-reply](https://github.com/zhinianboke/xianyu-auto-reply)** · 7.6k★ | Shipped auto-messaging buyers after positive reviews (3 rating paths, dedup, idempotency) — [#332](https://github.com/zhinianboke/xianyu-auto-reply/pull/332) |

**[All 23 merged PRs →](https://github.com/skyzhao1223/open-source-contributions)**

<!-- Hand-maintained. Keep this section above the PROJECTS markers: the weekly Action only rewrites between them. -->

<!-- PROJECTS:EN:START -->
## 🛠️ Agent Skills & Tools

- **[zspace-cli](https://github.com/skyzhao1223/zspace-cli)** [![stars](https://img.shields.io/github/stars/skyzhao1223/zspace-cli?style=social)](https://github.com/skyzhao1223/zspace-cli/stargazers) — Agent Skill + zero-config CLI / SDK / MCP for ZSpace (极空间) NAS. No password, no SSH — plug in and manage your NAS.
- **[baidu-pan-skill](https://github.com/skyzhao1223/baidu-pan-skill)** [![stars](https://img.shields.io/github/stars/skyzhao1223/baidu-pan-skill?style=social)](https://github.com/skyzhao1223/baidu-pan-skill/stargazers) — Agent Skill + zero-dependency scripts to download Baidu NetDisk (百度网盘) share links reliably: cookie extraction, transfer-save, resumable downloads, structural verification.
- **[media-manager-skill](https://github.com/skyzhao1223/media-manager-skill)** [![stars](https://img.shields.io/github/stars/skyzhao1223/media-manager-skill?style=social)](https://github.com/skyzhao1223/media-manager-skill/stargazers) — Media library naming scanner & organizer for local disks, cloud drives or any NAS (ZSpace, Synology, QNAP, UGREEN...). CN & Plex naming conventions, old→new preview before rename/move.
- **[media-naming-guide](https://github.com/skyzhao1223/media-naming-guide)** [![stars](https://img.shields.io/github/stars/skyzhao1223/media-naming-guide?style=social)](https://github.com/skyzhao1223/media-naming-guide/stargazers) — Chinese media library naming conventions for Plex / Emby / Jellyfin, with a Cursor AI Skill.
- **[shipit-skill](https://github.com/skyzhao1223/shipit-skill)** [![stars](https://img.shields.io/github/stars/skyzhao1223/shipit-skill?style=social)](https://github.com/skyzhao1223/shipit-skill/stargazers) — One-pass launch pipeline for developer tools: engineering baseline → publish → directory listings → promo.
- **[agent-skills-cn](https://github.com/skyzhao1223/agent-skills-cn)** [![stars](https://img.shields.io/github/stars/skyzhao1223/agent-skills-cn?style=social)](https://github.com/skyzhao1223/agent-skills-cn/stargazers) — AI Agent 技能合集 for Chinese developers: token-frugal, security-first, lazy-dev, chinese-stack.

## 🔌 MCP Servers & Dev Tools

- **[wheel-hub](https://github.com/skyzhao1223/wheel-hub)** [![stars](https://img.shields.io/github/stars/skyzhao1223/wheel-hub?style=social)](https://github.com/skyzhao1223/wheel-hub/stargazers) — Stop reinventing the wheel. MCP server + CLI that makes AI coding agents search GitHub for existing open-source solutions before implementing — scored 0–100 with adopt / adapt / inspect / avoid verdicts.
- **[doc2md](https://github.com/skyzhao1223/doc2md)** [![stars](https://img.shields.io/github/stars/skyzhao1223/doc2md?style=social)](https://github.com/skyzhao1223/doc2md/stargazers) — MCP server: convert PDF / DOCX / PPTX / XLSX / EPUB / HTML & scanned docs to clean Markdown — URL-first, keyless, table-preserving, with OCR, split/merge and search.
- **[sops-vault-kit](https://github.com/skyzhao1223/sops-vault-kit)** [![stars](https://img.shields.io/github/stars/skyzhao1223/sops-vault-kit?style=social)](https://github.com/skyzhao1223/sops-vault-kit/stargazers) — Local-first, AI-manageable encrypted credential vault: sops + age + git, 30-command CLI, browser panel, TOTP, audit log, offline key cards, built-in AGENTS.md — one install.sh.
- **[ops-copilot](https://github.com/skyzhao1223/ops-copilot)** [![stars](https://img.shields.io/github/stars/skyzhao1223/ops-copilot?style=social)](https://github.com/skyzhao1223/ops-copilot/stargazers) — Self-hosted, self-healing ops. Alerts drive coding agents to fix their own bugs, gated by tests and human approval.

## 🧩 DeepSeek Harness (DSH) Plugins

- **[dsh-agent-token-stats](https://github.com/skyzhao1223/dsh-agent-token-stats)** [![stars](https://img.shields.io/github/stars/skyzhao1223/dsh-agent-token-stats?style=social)](https://github.com/skyzhao1223/dsh-agent-token-stats/stargazers) — Cross-agent token usage dashboard: aggregates local logs of Claude Code, OpenCode, Cursor, DSH and more into a persistent ledger, with cache-hit, cost and drill-down analytics.
- **[dsh-plugin-sops-vault](https://github.com/skyzhao1223/dsh-plugin-sops-vault)** [![stars](https://img.shields.io/github/stars/skyzhao1223/dsh-plugin-sops-vault?style=social)](https://github.com/skyzhao1223/dsh-plugin-sops-vault/stargazers) — sops + age + git credential vault as a sidebar panel — agents see structure only, plaintext flows only on human click.
- **[dsh-plugin-scaffold](https://github.com/skyzhao1223/dsh-plugin-scaffold)** [![stars](https://img.shields.io/github/stars/skyzhao1223/dsh-plugin-scaffold?style=social)](https://github.com/skyzhao1223/dsh-plugin-scaffold/stargazers) — Minimal runnable DSH plugin scaffold: one model-facing tool via `ctx.tools`.

## 🎁 Resources & Apps

- **[free-for-creators](https://github.com/skyzhao1223/free-for-creators)** [![stars](https://img.shields.io/github/stars/skyzhao1223/free-for-creators?style=social)](https://github.com/skyzhao1223/free-for-creators/stargazers) — 🎁 License-verified free assets for creators: 148 resources for music, SFX, footage, photos, fonts, icons, LUTs, mockups & 3D, each tagged with attribution and monetization rules. ([Browse →](https://skyzhao1223.github.io/free-for-creators/))
- **[geo-contacts](https://github.com/skyzhao1223/geo-contacts)** [![stars](https://img.shields.io/github/stars/skyzhao1223/geo-contacts?style=social)](https://github.com/skyzhao1223/geo-contacts/stargazers) — Geographic contacts PWA with family tree and friend presence.
<!-- PROJECTS:EN:END -->

## 🔗 Links

- 🌐 Blog & portfolio: [zhaosky.cn](https://zhaosky.cn) · [skyzhao1223.github.io](https://github.com/skyzhao1223/skyzhao1223.github.io)

<div align="center">
<sub>🔄 Project list auto-synced weekly by GitHub Actions — curate via <code>projects.json</code></sub>
</div>
