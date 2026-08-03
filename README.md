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

See **`KODOCO-REPO.md`** — full setup including assets folder sync.

**Quick fix for missing assets:** run **Sync site to kodoco repo** workflow after adding `KODOCO_PAT` secret.

---

## Payments

Stripe Payment Links — see **`SETUP-PAYMENTS.md`**

---

## Local preview

```bash
npm install && npm run dev
```

Open http://localhost:5173
