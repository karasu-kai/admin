# Auto-deploy

```
Push to admin/kodoco  →  GitHub Actions builds  →  kodoco/hostinger updated  →  Hostinger pulls  →  live
```

---

## One-time setup

See **`KODOCO-REPO.md`**:

1. Add **`KODOCO_PAT`** secret to admin repo
2. Run **Sync site to kodoco repo** workflow once
3. Confirm Hostinger Git points at `karasu-kai/kodoco` branch `hostinger`

---

## GitHub Actions

**Deploy to Hostinger** — runs on push to `kodoco` branch:

1. Builds site (`npm run hostinger`)
2. Verifies `assets/` folder exists
3. Pushes to **`karasu-kai/kodoco`** branch **`hostinger`**
4. Optional FTP upload if FTP secrets are set

**Sync site to kodoco repo** — manual re-sync or auto-runs after deploy.

Check runs: https://github.com/karasu-kai/admin/actions

---

## Required secret

| Secret | Purpose |
|--------|---------|
| `KODOCO_PAT` | GitHub PAT with `repo` scope — pushes built site to kodoco repo |

Create at: https://github.com/settings/tokens (classic, tick **repo**)

---

## Optional FTP secrets

| Secret | Value |
|--------|-------|
| `FTP_SERVER` | `ftp.kodoco.com.au` |
| `FTP_USERNAME` | `u448359330.kodoco` |
| `FTP_PASSWORD` | your FTP password |
