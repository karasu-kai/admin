# kodoco repo — tidy structure

The **kodoco** repo should ONLY contain these files at the **root** of branch **`hostinger`**:

```
hostinger branch (root)
├── index.html
├── .htaccess
├── favicon.svg
├── icons.svg
└── assets/
    ├── index-D3IqGYwh.css
    └── index-DBm-rzTJ.js
```

## Delete from kodoco repo if present

- `README.md` (optional — or replace with kodoco-repo-README.md content)
- `src/` folder
- `node_modules/`
- `package.json`
- `deploy/` subfolder (files must be at **root**, not inside deploy/)
- Any Shopify or old files

## Clean copy (download fresh)

**https://github.com/karasu-kai/admin/tree/hostinger**

Download each file → upload to kodoco repo root → commit.

## Hostinger Git

After tidy upload:
1. hPanel → Git
2. Repo: `https://github.com/karasu-kai/kodoco.git`
3. Branch: **`hostinger`**
4. Path: **`public_html`**
5. **Deploy**

## Alternative — skip kodoco repo

Point Hostinger Git directly at:
- Repo: `https://github.com/karasu-kai/admin.git`
- Branch: **`hostinger`**

Same clean files, already maintained automatically.
