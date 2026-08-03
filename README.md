# KODO CO® Website

Immersive, minimal website for **kodoco.com.au** — copper peptide skincare + black-on-black merch.

Payments via **Stripe Payment Links** (no Shopify). Auto-deploys to Hostinger on push.

---

## Move to new repo (one-time)

### 1. Create the repo on GitHub

1. Go to **https://github.com/new**
2. Owner: **karasu-kai**
3. Name: **`kodoco`**
4. **Public**
5. Leave empty — no README, no .gitignore
6. Click **Create repository**

### 2. Push this code to it

```bash
git remote set-url origin https://github.com/karasu-kai/kodoco.git
git push -u origin main
```

### 3. Re-add FTP secrets on the new repo

Go to **https://github.com/karasu-kai/kodoco/settings/secrets/actions**

Add the same 3 secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`

### 4. Done

Code lives at **https://github.com/karasu-kai/kodoco**

Push to `main` → site auto-deploys to Hostinger.

---

## Auto-deploy

See **`SETUP-AUTO-DEPLOY.md`**

---

## Payments

See **`SETUP-PAYMENTS.md`** — Stripe Payment Links, one per product.

---

## What's in the site

| Page | URL |
|------|-----|
| Homepage | `/` |
| Skincare | `/shop` |
| Merch | `/merch` |

**Skincare:** GHK-Cu Serum, Cream, HA Mist, Renewal Mask  
**Merch:** Travel Bag, Logo Tee, Hoodie, Cap, Canvas Tote

---

## Local preview (optional)

```bash
npm install
npm run dev
```

Open http://localhost:5173
