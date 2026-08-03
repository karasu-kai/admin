# Payments — Stripe (no Shopify)

One payment link per product. No coding. No monthly Shopify fee.

---

## Setup (20 mins, once)

### 1. Create a Stripe account

1. Go to **https://stripe.com/au**
2. Sign up (free — you only pay ~1.7% + 30c per sale)
3. Complete business verification

### 2. Create a payment link for each product

1. Stripe Dashboard → **Product catalog** → **Add product**
2. Name: e.g. `GHK-Cu Serum`
3. Price: `$89 AUD`
4. Save → click **Create payment link**
5. Copy the link (looks like `https://buy.stripe.com/xxxxx`)
6. Repeat for all 9 products

### 3. Paste links into the site

Open `src/data/products.ts` → `paymentLinks` section:

```ts
export const paymentLinks: Record<string, string> = {
  'ghk-cu-serum': 'https://buy.stripe.com/YOUR_LINK_HERE',
  'ghk-cu-cream': 'https://buy.stripe.com/...',
  // etc.
}
```

Push to GitHub → site auto-deploys → **Buy Now** buttons go live.

*(Or send me the links and I'll paste them in.)*

---

## What happens when someone buys

1. Customer clicks **Buy Now** on your site
2. Stripe checkout page opens (card, Apple Pay, Google Pay)
3. You get an **email** with order details
4. Money lands in your Stripe account → transfer to your bank

---

## Alternatives

| Service | Good for |
|---------|----------|
| **Stripe** ✅ | Best option — payment links, Apple Pay, professional |
| **Revolut Business** | Payment links if you already use Revolut |
| **PayPal** | paypal.me links — less polished but works |
| **Wise** | Invoicing only — not great for a shop |

**Recommendation: Stripe.**

---

## Cancel Shopify

Once Stripe links are live:

1. Finish any open Shopify orders
2. Shopify Admin → **Settings** → **Plan** → **Deactivate store**
3. In Hostinger DNS → point **kodoco.com.au** to Hostinger only (remove Shopify A record)
4. Save ~$39/month

---

## What you manage manually (vs Shopify)

- Shipping orders yourself (Stripe emails you the address)
- Stock tracking (spreadsheet or memory for now)
- No built-in shipping labels — use Australia Post / Sendle when ready

Fine when you're starting out.
