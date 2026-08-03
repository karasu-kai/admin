# kodoco repo — what goes here

This is the **live deploy repo** for Hostinger. Only built site files — no source code.

---

## Branch: `hostinger`

Upload these files to the **root** of the branch (not in a subfolder):

```
index.html
.htaccess
favicon.svg
icons.svg
assets/
  index-D3IqGYwh.css
  index-DBm-rzTJ.js
```

---

## Get the files

Download from: **https://github.com/karasu-kai/admin/tree/hostinger**

Or run locally:

```bash
git clone -b hostinger https://github.com/karasu-kai/admin.git
cd admin
git init
git remote add kodoco https://github.com/karasu-kai/kodoco.git
git push -f kodoco HEAD:hostinger
```

---

## Hostinger Git settings

| Setting | Value |
|---------|-------|
| Repository | `https://github.com/karasu-kai/kodoco.git` |
| Branch | `hostinger` |
| Install path | `public_html` |
| Auto deploy | On |

---

## Do NOT put here

- `src/` folder
- `node_modules/`
- `package.json`
- Source code

Source code lives on **`karasu-kai/admin`** branch **`kodoco`**.
