# Auto-deploy to Hostinger

Push code → site updates automatically. No more manual uploads.

---

## One-time setup (10 mins)

### 1. Get FTP details from Hostinger

1. Hostinger hPanel → **Files** → **FTP Accounts**
2. Note down:
   - **FTP host** (e.g. `ftp.kodoco.com.au`)
   - **Username**
   - **Password**

### 2. Add secrets to GitHub

1. Open https://github.com/karasu-kai/admin/settings/secrets/actions
2. Click **New repository secret** for each:

| Name | Value |
|------|-------|
| `FTP_SERVER` | your FTP host |
| `FTP_USERNAME` | your FTP username |
| `FTP_PASSWORD` | your FTP password |

### 3. Push — done

Every time code is pushed to the branch, GitHub builds the site and uploads it to Hostinger automatically.

---

## How you update the site after this

1. Change something (or ask Cursor to)
2. Push to GitHub
3. Wait ~2 mins
4. Refresh your site

That's it.

---

## Check if it worked

GitHub → **Actions** tab → look for a green tick on "Deploy to Hostinger"

Red X = usually wrong FTP password. Double-check secrets.
