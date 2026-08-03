# KODO CO® Website

**Live site:** https://kodoco.com.au

---

## Repos

| Repo | Branch | Purpose |
|------|--------|---------|
| `karasu-kai/admin` | `kodoco` | Source code — edit here |
| `karasu-kai/kodoco` | `main` | Built site — Hostinger deploys from here |

---

## Git deploy

Hostinger pulls from **`karasu-kai/kodoco`** branch **`main`**.

**Site blank?** The `assets/` folder is missing from the kodoco repo. See **`KODOCO-REPO.md`** — add `KODOCO_PAT` and run the sync workflow.

---

## Payments

Stripe Payment Links — see **`SETUP-PAYMENTS.md`**

---

## Local preview

```bash
npm install && npm run dev
```

Open http://localhost:5173
