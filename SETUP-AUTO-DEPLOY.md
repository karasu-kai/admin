# Auto-deploy

## How it works

```
Push to admin/kodoco  →  GitHub Actions builds  →  admin/hostinger updated
                                                    ↓
                              KODOCO_PAT set?  →  kodoco/hostinger synced
                                                    ↓
                              Hostinger Git auto-pulls  →  kodoco.com.au live
```

---

## GitHub Actions (admin repo)

**Deploy to Hostinger** runs on every push to `kodoco` branch:

1. Builds the site (`npm run hostinger`)
2. Verifies `deploy/` includes `assets/` folder
3. Pushes to `hostinger` branch on **admin** repo
4. Syncs to **kodoco** repo if `KODOCO_PAT` secret is set
5. Uploads via FTP if FTP secrets are set

Check runs: https://github.com/karasu-kai/admin/actions

---

## One-time setup

See **`KODOCO-REPO.md`** for:

- Fast fix (point Hostinger at admin/hostinger — works immediately)
- Long-term kodoco repo sync (add `KODOCO_PAT` secret)
- Fix 421 Git deploy error

---

## Repo secrets

| Secret | Purpose |
|--------|---------|
| `KODOCO_PAT` | Push built site to kodoco repo (GitHub PAT with repo scope) |
| `FTP_SERVER` | Optional direct FTP deploy (`ftp.kodoco.com.au`) |
| `FTP_USERNAME` | Optional FTP user (`u448359330.kodoco`) |
| `FTP_PASSWORD` | Optional FTP password |

Create PAT: GitHub → Settings → Developer settings → Personal access tokens → classic → tick **repo**

---

## Manual sync

If you need to re-push to kodoco without a code change:

1. https://github.com/karasu-kai/admin/actions/workflows/sync-kodoco.yml
2. Branch: **kodoco**
3. **Run workflow**
