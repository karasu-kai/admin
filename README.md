# KODO CO® Website

**Live site:** https://kodoco.com.au

---

## Repos

| Repo | Branch | Purpose |
|------|--------|---------|
| `karasu-kai/admin` | `kodoco` | Source code — edit here |
| `karasu-kai/kodoco` | `hostinger` | Built site — Hostinger Git deploys from here |

---

## Git deploy

Hostinger pulls from **`karasu-kai/kodoco`** branch **`hostinger`**.

**Site blank?** The `assets/` folder is missing from kodoco repo. See **`KODOCO-REPO.md`** — add `KODOCO_PAT` secret and run the sync workflow.

---

## Payments

Stripe Payment Links — see **`SETUP-PAYMENTS.md`**

---

## Local preview

```bash
npm install && npm run dev
```

Open http://localhost:5173
