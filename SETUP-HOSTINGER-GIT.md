# Hostinger setup (no FTP secrets needed)

Your site files live on the **`hostinger`** branch — ready to pull.

---

## One-time setup in Hostinger (5 mins)

1. hPanel → **Websites** → **Manage** → **Advanced** → **Git**
2. **Create repository**
3. Paste: `https://github.com/karasu-kai/admin.git`
4. Branch: **`hostinger`**
5. Install path: **`public_html`**
6. Enable **Auto deployment**
7. Click **Deploy**

Done. Site goes live.

---

## After every code update

Push to GitHub → Actions builds automatically → `hostinger` branch updates → Hostinger auto-pulls.

No manual uploads. No FTP secrets.

---

## If Git isn't available on your plan

Use FTP secrets instead — see `SETUP-AUTO-DEPLOY.md`

---

## Domain

Make sure **kodoco.com.au** points to Hostinger (not Shopify) in DNS.
