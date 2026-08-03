# kodoco repo — Git deploy for Hostinger

Your **kodoco** repo must look exactly like this on branch **`hostinger`**:

```
hostinger/
├── index.html
├── .htaccess
├── favicon.svg
├── icons.svg
└── assets/
    ├── index-D3IqGYwh.css
    └── index-DBm-rzTJ.js
```

The **assets folder must be in git** — manual GitHub upload often skips it. Use the sync below.

---

## One-time sync (includes assets folder)

### Step 1 — Create a GitHub token

1. **https://github.com/settings/tokens** → **Generate new token (classic)**
2. Tick **`repo`** (full control)
3. Generate → **copy the token**

### Step 2 — Add token to admin repo secrets

1. **https://github.com/karasu-kai/admin/settings/secrets/actions**
2. **New secret**
3. Name: **`KODOCO_PAT`**
4. Value: paste your token
5. Save

### Step 3 — Run sync (one click)

1. **https://github.com/karasu-kai/admin/actions/workflows/sync-kodoco.yml**
2. Click **Run workflow** → **Run workflow**
3. Wait for green tick (~30 secs)

This pushes the full site **including assets/** to your **kodoco** repo.

---

## Hostinger Git settings

1. hPanel → **Advanced** → **Git**
2. **Create** or **Edit** repository:

| Field | Value |
|-------|-------|
| URL | `https://github.com/karasu-kai/kodoco.git` |
| Branch | **`hostinger`** |
| Path | **`public_html`** |
| Auto deploy | **On** |

3. If repo is **private**: connect GitHub account in Hostinger and grant access to **kodoco**
4. Click **Deploy**

---

## Fix 421 error

421 = Hostinger can't connect to your GitHub repo. Usually:

- **Private repo** → reconnect GitHub in Hostinger Git settings, grant repo access
- **Wrong branch** → use **`hostinger`** not `main`
- **Empty repo** → run the sync workflow above first

---

## Skip kodoco repo (works immediately)

Point Hostinger Git at:

| Field | Value |
|-------|-------|
| URL | `https://github.com/karasu-kai/admin.git` |
| Branch | **`hostinger`** |

Same files, assets folder already there: **https://github.com/karasu-kai/admin/tree/hostinger/assets**

---

## After every site update

Push changes to **admin** branch **kodoco** → auto-rebuilds **hostinger** branch → run **Sync site to kodoco repo** workflow → Hostinger auto-deploys.
