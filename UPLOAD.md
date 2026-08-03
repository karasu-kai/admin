# Upload instructions

I can't push to `karasu-kai/kodoco` from here (private repo). Everything is ready — two uploads:

---

## 1. Hostinger File Manager (live site)

Upload **everything** inside the `deploy/` folder to `public_html`:

```
index.html
.htaccess
favicon.svg
icons.svg
assets/          ← must include this folder
  index-B6oGl-P8.css
  index-DK_D8eAs.js
```

Or download ready-made zip from GitHub:  
https://github.com/karasu-kai/admin/archive/refs/heads/live.zip

Unzip → upload all files to `public_html`.

---

## 2. kodoco repo (full project)

Push this entire project to `karasu-kai/kodoco` branch `main`.

Source is on: https://github.com/karasu-kai/admin/tree/kodoco

Or download: https://github.com/karasu-kai/admin/archive/refs/heads/kodoco.zip

Upload/extract to your kodoco repo on GitHub.

---

That's it. No workflows, no secrets, no admin repo needed after that.
