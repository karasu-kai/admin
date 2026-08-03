# Fix kodoco.com.au deploy

**Problem:** Site loads blank — `index.html` is on the server but the `assets/` folder is missing (404 on JS/CSS).

**Cause:** The kodoco repo was updated via GitHub web upload, which skipped the `assets/` folder. Hostinger Git pulls from kodoco, so the live site is incomplete.

---

## Fastest fix (about 2 minutes)

Point Hostinger Git at the **admin** repo — the `hostinger` branch already has the full site including `assets/`.

1. Log in to **Hostinger hPanel** → **Advanced** → **Git**
2. Edit your existing repository (or create new):
3. Set these values:

| Field | Value |
|-------|-------|
| Repository URL | `https://github.com/karasu-kai/admin.git` |
| Branch | `hostinger` |
| Install path | `public_html` |
| Auto deploy | **On** |

4. If GitHub asks you to connect — sign in and grant access to **karasu-kai/admin**
5. Click **Deploy**

Verify: open https://kodoco.com.au — you should see the black KODO CO site with working Shop and Merch pages.

Assets are here if you want to check: https://github.com/karasu-kai/admin/tree/hostinger/assets

---

## Long-term setup (kodoco repo + auto-sync)

Keep using **karasu-kai/kodoco** as the production deploy repo.

### Step 1 — Create a GitHub token

1. Go to https://github.com/settings/tokens
2. **Generate new token (classic)**
3. Tick **repo** (full control of private repositories)
4. Generate → **copy the token**

### Step 2 — Add token to admin repo

1. Go to https://github.com/karasu-kai/admin/settings/secrets/actions
2. **New repository secret**
3. Name: `KODOCO_PAT`
4. Value: paste your token
5. Save

### Step 3 — Run sync (one click)

1. Go to https://github.com/karasu-kai/admin/actions/workflows/sync-kodoco.yml
   - Use branch dropdown: select **kodoco**
2. Click **Run workflow** → **Run workflow**
3. Wait for green check (~30 seconds)

This pushes the full site **including assets/** to kodoco repo.

### Step 4 — Hostinger Git settings (kodoco repo)

| Field | Value |
|-------|-------|
| Repository URL | `https://github.com/karasu-kai/kodoco.git` |
| Branch | `hostinger` |
| Install path | `public_html` |
| Auto deploy | **On** |

For a **private** repo: connect your GitHub account in Hostinger and grant access to **kodoco**.

Click **Deploy**.

---

## Fix 421 error

Error 421 means Hostinger cannot access your GitHub repo.

| Cause | Fix |
|-------|-----|
| Private repo | Reconnect GitHub in Hostinger Git → grant access to the repo |
| Wrong branch | Use `hostinger` (not `main` or `kodoco`) |
| Empty / incomplete repo | Run sync workflow above, or use admin/hostinger as temporary source |
| Token expired | Regenerate GitHub token, update KODOCO_PAT secret |

---

## What gets deployed

Root of `hostinger` branch — nothing else:

```
index.html
.htaccess
favicon.svg
icons.svg
assets/
  index-*.css
  index-*.js
```

---

## After every site update

1. Push code changes to **admin** repo, branch **kodoco**
2. GitHub Actions builds and updates **admin/hostinger** automatically
3. If `KODOCO_PAT` is set, kodoco repo syncs automatically too
4. Hostinger auto-deploys on git pull

Check builds: https://github.com/karasu-kai/admin/actions

---

## Optional: FTP deploy (bypasses Git)

Add these secrets to admin repo → Settings → Secrets:

| Secret | Value |
|--------|-------|
| `FTP_SERVER` | `ftp.kodoco.com.au` |
| `FTP_USERNAME` | `u448359330.kodoco` |
| `FTP_PASSWORD` | your FTP password |

FTP deploy runs on every push to kodoco branch if secrets are set.
