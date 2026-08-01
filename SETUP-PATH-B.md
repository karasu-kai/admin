# Path B — Dope site + Shopify checkout

**You:** Hostinger = the pretty site  
**Shopify:** handles payments, orders, shipping (already set up)

---

## The flow (what your customer sees)

1. Lands on **kodoco.com.au** → your black minimal site  
2. Clicks **Add to Bag** → goes to Shopify product page  
3. Pays on Shopify → you get the order email → you ship  

You never touch code day-to-day.

---

## STEP 1 — Move Shopify to a subdomain (do this FIRST)

Right now Shopify lives at `kodoco.com.au`. Once you put the new site on that domain, Shopify needs its own address.

1. Log into **Shopify Admin**
2. **Settings** → **Domains**
3. Click **Connect existing domain** or **Manage**
4. Add **`shop.kodoco.com.au`** as your primary store domain  
   (Shopify walks you through this — usually add a CNAME in Hostinger DNS)

After this, your store checkout lives at **`shop.kodoco.com.au`**

> ⚠️ Do Step 1 before pointing the main domain to Hostinger, or you'll break checkout temporarily.

---

## STEP 2 — Upload the site to Hostinger

1. Log into **Hostinger** → **Websites** → **Manage**
2. Open **File Manager** → go into **`public_html`**
3. **Delete** old files in there (backup first if unsure)
4. Upload **everything inside the `deploy/` folder** from this repo:
   - `index.html`
   - `favicon.svg`
   - `.htaccess` ← turn on **Show hidden files** in File Manager if you don't see it
   - the whole **`assets/`** folder

5. Visit your Hostinger temporary URL (or domain once pointed) — site should load.

**No npm. No coding. Just upload those files.**

---

## STEP 3 — Point kodoco.com.au to Hostinger

In **Hostinger hPanel** → **Domains** → your domain → **DNS**:

- Point the domain to Hostinger (usually automatic if domain is registered there)
- If domain is elsewhere (GoDaddy, etc.): change **nameservers** to Hostinger's (shown in hPanel)

Wait 1–24 hours for DNS. Then `kodoco.com.au` = your new site.

---

## STEP 4 — Add your new products in Shopify

Your store still has old products (Blue Copper Glow, Pink Renewal, etc.). Create the new ones:

### Skincare
| Product | Suggested URL handle |
|---------|---------------------|
| GHK-Cu Serum | `ghk-cu-serum` |
| GHK-Cu Cream | `ghk-cu-cream` |
| HA Mist Spray | `ghk-cu-mist` |
| Renewal Face Mask | `face-mask` |

### Merch
| Product | Suggested URL handle |
|---------|---------------------|
| Travel Bag | `travel-bag` |
| Logo Tee | `logo-tee` |
| Hoodie | `oversized-hoodie` |
| Cap | `structured-cap` |
| Tote | `canvas-tote` |

In Shopify when creating each product: scroll to **Search engine listing** → set the **URL handle** to match the table above.

Add photos, prices, stock. Hide or delete old products when ready.

---

## STEP 5 — Connect Add to Bag buttons (one-time, 5 min for a dev)

Buttons need to point to `shop.kodoco.com.au` instead of the main domain.

Each button should go to:
```
https://shop.kodoco.com.au/products/[handle]
```

Example: `https://shop.kodoco.com.au/products/ghk-cu-serum`

Ask Cursor / a dev to update `src/data/products.ts` → run `npm run hostinger` → re-upload `deploy/` folder.

**Or** come back here and say "connect shopify links" once products are live — I'll do it.

---

## STEP 6 — Test a full purchase

1. Open **kodoco.com.au** on your phone  
2. Click **Add to Bag** on a product  
3. You should land on **shop.kodoco.com.au**  
4. Buy something with a real card (or Shopify test mode)  
5. Check you get the order email  

Done. You're live.

---

## Quick reference

| Thing | Where |
|-------|-------|
| Pretty website | kodoco.com.au (Hostinger) |
| Checkout & orders | shop.kodoco.com.au (Shopify) |
| Upload site files | Hostinger → public_html |
| Manage products | Shopify Admin |
| Update site look later | Edit repo → `npm run hostinger` → re-upload deploy/ |

---

## Monthly costs (rough)

- **Hostinger** ~$3–10/mo (website hosting)
- **Shopify** ~$39/mo (already paying — keep it)

Worth it for the look + zero checkout headaches.

---

## Need help?

Come back with:
- "Shopify subdomain is done" → I'll wire the Add to Bag links  
- "Products are created" → send handles if different from table above  
- "Site is uploaded" → I'll help troubleshoot if something's broken  
