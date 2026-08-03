# KODO CO® Website

Immersive, minimal website for [kodoco.com.au](https://kodoco.com.au) — copper peptide skincare + black-on-black merch.

---

## Auto-deploy (recommended)

Set up once — never upload manually again. See **`SETUP-AUTO-DEPLOY.md`**.

Push to GitHub → site updates on Hostinger automatically.

---

## Manual upload (backup option)

If auto-deploy isn't set up yet:

1. Log in to **Hostinger** → **File Manager** → **`public_html`**
2. Upload **everything inside the `deploy/` folder**

---

## Updating the site

**With auto-deploy:** push to GitHub. Done.

**Manual:** run `npm run hostinger` then re-upload `deploy/`.

---

## Local preview (optional)

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## What’s in the site

| Page | URL |
|------|-----|
| Homepage | `/` |
| Skincare | `/shop` |
| Merch (black on black) | `/merch` |

**Skincare:** GHK-Cu Serum, Cream, HA Mist, Renewal Mask  
**Merch:** Travel Bag, Logo Tee, Hoodie, Cap, Canvas Tote

**Payments:** Stripe Payment Links (see **`SETUP-PAYMENTS.md`**) — no Shopify needed.

---

## New GitHub repo setup

If you’re pushing this to a fresh repo:

```bash
git remote add origin https://github.com/YOUR-USERNAME/kodoco-website.git
git push -u origin main
```

Create the empty repo first at [github.com/new](https://github.com/new) — name it `kodoco-website`.
