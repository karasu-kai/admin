# Auto-deploy

Push to **`admin`** repo, branch **`kodoco`** → GitHub Actions rebuilds branch **`hostinger`**.

Then sync **`hostinger`** → **`kodoco`** repo for Hostinger to pull.

---

## GitHub Actions (admin repo)

Runs on push to `kodoco` branch:
1. Builds the site
2. Updates `hostinger` branch on **admin** repo

Check: https://github.com/karasu-kai/admin/actions

---

## Sync to kodoco repo

After build, push `hostinger` branch to your **kodoco** repo:

```bash
git clone -b hostinger https://github.com/karasu-kai/admin.git /tmp/sync
cd /tmp/sync
git push -f https://github.com/karasu-kai/kodoco.git HEAD:hostinger
```

Hostinger Git auto-pulls from **kodoco** repo.

---

## Optional: FTP deploy

Add secrets to **admin** repo → Settings → Secrets:

| Secret | Value |
|--------|-------|
| `FTP_SERVER` | `ftp.kodoco.com.au` |
| `FTP_USERNAME` | `u448359330.kodoco` |
| `FTP_PASSWORD` | your FTP password |

FTP deploy runs automatically if secrets are set.

---

## Repo secrets for auto-sync to kodoco

Add `KODOCO_PAT` secret (Personal Access Token with repo access) to auto-push to **kodoco** repo on every deploy.

Create token: GitHub → Settings → Developer settings → Personal access tokens
