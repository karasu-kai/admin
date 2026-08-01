# KODO CO® Website

Immersive, minimal website for [kodoco.com.au](https://kodoco.com.au) — copper peptide skincare + black-on-black merch.

---

## Put it live on Hostinger (no coding)

### Step 1 — Upload the site

1. Log in to **Hostinger** → **Websites** → your domain → **File Manager**
2. Open the **`public_html`** folder (delete old files in there if you’re replacing the site)
3. Upload **everything inside the `deploy/` folder** in this repo — not the folder itself, the files inside it:
   - `index.html`
   - `favicon.svg`
   - `.htaccess`
   - the `assets/` folder

That’s it. Visit your domain — the site should load.

> The `deploy/` folder is a ready-to-upload build. You don’t need to run any commands.

### Step 2 — Point your domain (if needed)

If the domain isn’t already pointed at Hostinger, set nameservers in your domain registrar to Hostinger’s (shown in hPanel).

### Step 3 — Shopify checkout links

“Add to Bag” buttons link to your Shopify store. When products are set up, update URLs in:

`src/data/products.ts` → `shopifyUrl` function

Then ask a dev to run `npm run hostinger` and re-upload the `deploy/` folder.

---

## Updating the site later

If you change copy, products, or photos in the source code:

```bash
npm install
npm run hostinger
```

Re-upload the contents of `deploy/` to Hostinger `public_html`.

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

---

## New GitHub repo setup

If you’re pushing this to a fresh repo:

```bash
git remote add origin https://github.com/YOUR-USERNAME/kodoco-website.git
git push -u origin main
```

Create the empty repo first at [github.com/new](https://github.com/new) — name it `kodoco-website`.
