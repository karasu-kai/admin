# kodoco repo — Git deploy for Hostinger

**Production repo:** `karasu-kai/kodoco`  
**Hostinger pulls from:** branch `hostinger` → path `public_html`

---

## Current problem

Site loads blank because `index.html` is on the server but the **`assets/` folder is missing** (404 on JS/CSS). GitHub web upload skipped the assets folder.

---

## Fix it (3 steps)

### Step 1 — Create a GitHub token

1. https://github.com/settings/tokens → **Generate new token (classic)**
2. Tick **`repo`**
3. Generate → copy the token

### Step 2 — Add token to admin repo

1. https://github.com/karasu-kai/admin/settings/secrets/actions
2. **New repository secret**
3. Name: **`KODOCO_PAT`**
4. Value: paste your token → Save

### Step 3 — Run sync (one click)

1. https://github.com/karasu-kai/admin/actions/workflows/sync-kodoco.yml
2. Click **Run workflow** → **Run workflow**
3. Wait for green tick (~1 min)

This builds the site and pushes **everything including `assets/`** to `karasu-kai/kodoco` branch `hostinger`.

Then in **Hostinger hPanel → Git**, click **Deploy** (or wait for auto-deploy).

---

## Hostinger Git settings

| Field | Value |
|-------|-------|
| Repository | `https://github.com/karasu-kai/kodoco.git` |
| Branch | `hostinger` |
| Path | `public_html` |
| Auto deploy | **On** |

**Private repo:** connect GitHub in Hostinger and grant access to **kodoco**.

---

## Fix 421 error

421 = Hostinger cannot reach your GitHub repo.

| Cause | Fix |
|-------|-----|
| Private repo | Reconnect GitHub in Hostinger → grant access to **kodoco** |
| Wrong branch | Use **`hostinger`** |
| Incomplete repo | Run sync workflow above (needs `KODOCO_PAT`) |
| Token expired | Regenerate token, update `KODOCO_PAT` |

---

## Repo layout (kodoco / hostinger branch)

Only built site files at root:

```
index.html
.htaccess
favicon.svg
icons.svg
assets/
  index-*.css
  index-*.js
```

No source code. No subfolders except `assets/`.

---

## Auto-deploy after setup

1. Edit source on **admin** repo, branch **kodoco**
2. Push → GitHub Actions builds and pushes to **kodoco/hostinger**
3. Hostinger auto-pulls → kodoco.com.au updates

Requires `KODOCO_PAT` secret (Step 2 above).

Check builds: https://github.com/karasu-kai/admin/actions

---

## Optional FTP fallback

If Git deploy is stuck, add FTP secrets to admin repo:

| Secret | Value |
|--------|-------|
| `FTP_SERVER` | `ftp.kodoco.com.au` |
| `FTP_USERNAME` | `u448359330.kodoco` |
| `FTP_PASSWORD` | your FTP password |

Runs automatically on deploy if set.
