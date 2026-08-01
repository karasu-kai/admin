# Portfolio Repo Map

Each project lives in its own GitHub repo. Upload existing code and assets there, then build out independently. This repo (`admin`) is the **central showcase hub** only.

## How to use

1. Pick a project below.
2. Clone its repo (or create it if marked **create repo**).
3. Drop in your existing code, docs, and assets.
4. Push to `main`.
5. The hub site reads from `src/data/projects.ts` — update status/links when a repo goes live.

---

## Flagship products

| Project | Repo | Status | Upload here |
|---------|------|--------|-------------|
| **Geo-Met** | [karasu-kai/geo-met](https://github.com/karasu-kai/geo-met) | **create repo** — migrate from `geo-met-beta` | `server.js`, Leaflet frontend, VPS deploy notes, badge assets |
| **NeoHawk** | [karasu-kai/neohawk](https://github.com/karasu-kai/neohawk) | **create repo** | Smart contracts, Python hashing scripts, whitepaper |
| Spec docs (Geo-Met) | *this repo* → `docs/portfolio/` | done | PDFs/DOCX already uploaded |
| Spec docs (NeoHawk) | *this repo* → `docs/portfolio/` | done | Whitepaper + deployment guide uploaded |

> **Note:** `geo-met-beta` remains until you migrate. New canonical repo: `geo-met`.

---

## Live apps

| Project | Repo | Status | Upload here |
|---------|------|--------|-------------|
| **Huddle Up** | [karasu-kai/huddleup](https://github.com/karasu-kai/huddleup) | live · [huddleup.wtf](https://huddleup.wtf) | Already has full codebase |
| **Kodoco** | [karasu-kai/kodoco](https://github.com/karasu-kai/kodoco) | **create repo** — code on branch `cursor/kodoco-website-rebrand-ce81` in admin | Vite site, merch assets, `public/` |

---

## Business & brand

| Project | Repo | Status | Upload here |
|---------|------|--------|-------------|
| **Aerotech Industries** | [karasu-kai/aerotech-industries](https://github.com/karasu-kai/aerotech-industries) | **create repo** | Website, pitch deck (`Business Scope-2.pdf` ref in docs), media |
| **Yatagarasu** | [karasu-kai/yatagarasu](https://github.com/karasu-kai/yatagarasu) | **create repo** — assets on branch `cursor/yatagarasu-crow-mark-b39d` | Brand mark, drop-in snippets |

---

## Internal tools

| Project | Repo | Status | Upload here |
|---------|------|--------|-------------|
| **Stock Order Collation** | [karasu-kai/stock-order-collation](https://github.com/karasu-kai/stock-order-collation) | **create repo** — code on branch `cursor/stock-order-collation-c515` | `order-collation/` tooling |
| **Test Platform** | [karasu-kai/testplatform](https://github.com/karasu-kai/testplatform) | **create repo** — code on branch `cursor/testplatform-maintenance-page-61c9` | Maintenance page, deploy notes |

---

## Central hub (this repo)

| Path | Purpose |
|------|---------|
| `/` | Portfolio hub site (Vite + React) |
| `docs/portfolio/` | Shared spec PDFs and DOCX (not duplicated per repo) |
| `docs/REPO_MAP.md` | This file |
| `src/data/projects.ts` | Project registry for the hub UI |

---

## Migrating code from admin branches

Several projects were started on feature branches in this repo. Move them to dedicated repos:

```bash
# Example: Kodoco
git clone https://github.com/karasu-kai/kodoco.git
cd kodoco
git fetch origin cursor/kodoco-website-rebrand-ce81:temp-kodoco
git checkout temp-kodoco -- .
git add .
git commit -m "Import from admin branch"
git push origin main
```

Repeat for `yatagarasu`, `stock-order-collation`, and `testplatform`.

---

## Geo-Met badge tiers (canonical)

Use this order across all Geo-Met repos (from deployment ops doc):

| Tier | Points | Perks |
|------|--------|-------|
| Freyja's Keep (Bronze) | 0–499 | Basic reporting, needs verification |
| Thor's Storm (Silver) | 500–1,499 | Storm reporting, priority |
| Gaia's Dominion (Gold) | 1,500–2,999 | AI insights, alert influence |
| Poseidon's Surge (Platinum) | 3,000–4,999 | Validate/override lower tiers |
| Odin's Watch (Elite) | 5,000–9,999 | Advanced AI, regional alerts |
| Zeus' Wrath (Legendary) | 10,000–24,999 | Permanent, beta AI tools |
| Ra's Solar Order (Ultimate) | 25,000–49,999 | Global alert influence |
| Cronus' Timeless Authority (God-Tier) | 50,000+ | Top 0.1%, full authority |

---

## Contact & domains

| Project | Domain / contact |
|---------|------------------|
| Geo-Met | geomet.tech · fortunamagna@tuta.io |
| Huddle Up | huddleup.wtf |
| Aerotech | aerotechindustries.com.au |
