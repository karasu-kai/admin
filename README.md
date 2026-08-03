# KODO CO® Website

Immersive, minimal website for **kodoco.com.au** — copper peptide skincare + black-on-black merch.

---

## Repo layout

| Repo | Branch | What's in it |
|------|--------|----------------|
| **`karasu-kai/admin`** | `kodoco` | Source code (edit here) |
| **`karasu-kai/admin`** | `hostinger` | Built site files (ready to deploy) |
| **`karasu-kai/kodoco`** | `hostinger` | Copy of built site → Hostinger pulls this |

**`admin` is the dev repo. `kodoco` is the live deploy repo.**

---

## Current status

- **DNS** → Hostinger ✅
- **Site files on Hostinger** → ❌ still default placeholder page
- **Fix** → upload `hostinger` branch files to `kodoco` repo, then deploy in Hostinger Git

---

## Go live (Hostinger Git)

1. Upload site files to **https://github.com/karasu-kai/kodoco** (branch: `hostinger`)
   - Download from: **https://github.com/karasu-kai/admin/tree/hostinger**
   - Files: `index.html`, `.htaccess`, `favicon.svg`, `icons.svg`, `assets/`

2. Hostinger hPanel → **Git**
   - Repo: `https://github.com/karasu-kai/kodoco.git`
   - Branch: **`hostinger`**
   - Path: **`public_html`**
   - Click **Deploy**

---

## Edit the site

1. Edit source on `admin` repo, branch `kodoco`
2. Push → GitHub Actions rebuilds `hostinger` branch automatically
3. Copy/sync to `kodoco` repo → Hostinger redeploys

---

## Payments

Stripe Payment Links — see **`SETUP-PAYMENTS.md`**

---

## Local preview

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Pages

| Page | URL |
|------|-----|
| Homepage | `/` |
| Skincare | `/shop` |
| Merch | `/merch` |
