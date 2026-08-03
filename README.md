# KODO CO® Website

**Live site:** https://kodoco.com.au

---

## Repos

| Repo | Branch | Purpose |
|------|--------|---------|
| `karasu-kai/admin` | `kodoco` | Edit source code here |
| `karasu-kai/admin` | `hostinger` | Built site with **assets/** folder |
| `karasu-kai/kodoco` | `hostinger` | Hostinger Git pulls from here |

---

## Git deploy to Hostinger

**Site blank?** See **`KODOCO-REPO.md`** — fastest fix is point Hostinger Git at `karasu-kai/admin` branch `hostinger` (assets folder is already there).

For kodoco repo sync: add `KODOCO_PAT` secret, then run **Sync site to kodoco repo** workflow.

---

## Payments

Stripe Payment Links — see **`SETUP-PAYMENTS.md`**

---

## Local preview

```bash
npm install && npm run dev
```

Open http://localhost:5173
