# Push to kodoco repo (run once)

The site is built and ready. Run these in terminal:

```bash
cd /path/to/kodoco   # or clone first (see below)
git remote add origin https://github.com/karasu-kai/kodoco.git
git push -u origin main
git push origin hostinger
```

## Don't have the files locally?

**Option A — Clone from admin (easiest)**

```bash
git clone -b kodoco https://github.com/karasu-kai/admin.git kodoco
cd kodoco
git remote set-url origin https://github.com/karasu-kai/kodoco.git
git push -u origin kodoco:main
git push origin hostinger
```

**Option B — GitHub Import**

1. https://github.com/karasu-kai/kodoco/import
2. Source: `https://github.com/karasu-kai/admin`
3. Branch: `kodoco`
4. Import

---

## After push — Hostinger Git

1. hPanel → Git → Create
2. Repo: `https://github.com/karasu-kai/kodoco.git`
3. Branch: **`hostinger`**
4. Path: **`public_html`**
5. Deploy

---

## Branches

| Branch | What's in it |
|--------|----------------|
| `main` / `kodoco` | Source code |
| `hostinger` | Built site (upload this to web) |

Auto-deploy: push to `main` → GitHub Actions updates `hostinger` branch automatically.
