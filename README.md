# Karasu-kai · Portfolio Hub

Central showcase for all projects. Each product has its **own repo** — upload code there, build independently. This repo is the hub only.

## Quick links

- **[Repo map](docs/REPO_MAP.md)** — which repo to use for each project
- **[Spec documents](docs/portfolio/)** — Geo-Met, NeoHawk, Aerotech PDFs/DOCX
- **Hub site** — run locally below

## Run the hub locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project repos

| Project | Repo |
|---------|------|
| Geo-Met | [geo-met](https://github.com/karasu-kai/geo-met) |
| NeoHawk | [neohawk](https://github.com/karasu-kai/neohawk) |
| Huddle Up | [huddleup](https://github.com/karasu-kai/huddleup) |
| Kodoco | [kodoco](https://github.com/karasu-kai/kodoco) |
| Aerotech Industries | [aerotech-industries](https://github.com/karasu-kai/aerotech-industries) |
| Yatagarasu | [yatagarasu](https://github.com/karasu-kai/yatagarasu) |
| Stock Order Collation | [stock-order-collation](https://github.com/karasu-kai/stock-order-collation) |
| Test Platform | [testplatform](https://github.com/karasu-kai/testplatform) |

## Adding a project to the hub UI

Edit `src/data/projects.ts` — add an entry with repo URL, status, and links. Rebuild or refresh dev server.
