# KODO CO®

Premium Australian skincare — https://kodoco.com.au

Everything for this project is in **`karasu-kai/kodoco`**.

---

## Branches

| Branch | Purpose |
|--------|---------|
| `main` | Source code — edit here |
| `live` | Built site — Hostinger deploys from here |

---

## Hostinger Git

| Setting | Value |
|---------|-------|
| Repository | `https://github.com/karasu-kai/kodoco.git` |
| Branch | **`live`** |
| Path | `public_html` |
| Auto deploy | On |

Private repo: connect GitHub in Hostinger and grant access to **kodoco**.

**421 error:** reconnect GitHub in Hostinger → grant repo access → branch must be **`live`**.

---

## Deploy

Push to **`main`** → GitHub Actions builds → updates **`live`** branch → Hostinger pulls.

Manual re-deploy: Actions → **Deploy site** → Run workflow.

The `live` branch has only built files at root:

```
index.html
.htaccess
favicon.svg
icons.svg
assets/
```

---

## Local preview

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Payments

Stripe Payment Links — see **`SETUP-PAYMENTS.md`**

---

## Optional FTP

| Secret | Value |
|--------|-------|
| `FTP_SERVER` | `ftp.kodoco.com.au` |
| `FTP_USERNAME` | `u448359330.kodoco` |
| `FTP_PASSWORD` | your FTP password |

Add in repo Settings → Secrets → Actions. Runs on every deploy if set.
