# Cloud Agent instructions — karasu-kai/admin (Portfolio Hub)

This repo is the **central showcase hub**, not application code.

## Repo purpose

- Portfolio hub site (Vite + React at repo root)
- Shared spec documents in `docs/portfolio/` (Geo-Met, NeoHawk, Aerotech PDFs/DOCX)
- Repo map and onboarding docs in `docs/`

## Do NOT put here

- Geo-Met application code → `karasu-kai/geo-met`
- NeoHawk contracts/scripts → `karasu-kai/neohawk`
- Huddle Up app → `karasu-kai/huddleup`
- Other project code → see `docs/REPO_MAP.md`

## When working in this repo

1. Update `src/data/projects.ts` when a project repo goes live or status changes
2. Keep spec PDFs in `docs/portfolio/` — do not duplicate into project repos
3. Hub UI changes only — no backend app logic for Geo-Met/NeoHawk here

## Related repos

| Project | Repo |
|---------|------|
| Geo-Met | `karasu-kai/geo-met` |
| NeoHawk | `karasu-kai/neohawk` |
| Huddle Up | `karasu-kai/huddleup` |
| Kodoco | `karasu-kai/kodoco` |

Full map: `docs/REPO_MAP.md`  
User onboarding: `docs/START_HERE.md`

## Branch naming

Feature branches: `cursor/<short-description>-c80e`

## Before opening PRs

- `npm run build` must pass
- Update `src/data/projects.ts` if project links/status changed
