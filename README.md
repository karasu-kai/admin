# Karasu Kai — Test Platform

Static maintenance / landing page for **testplatform.space** — the Karasu Kai staging environment.

## Deploy

Serve `index.html` as the default document for the domain. Works with any static host (Nginx, Caddy, S3, Cloudflare Pages, etc.).

```nginx
server {
    listen 80;
    server_name testplatform.space;
    root /var/www/testplatform;
    index index.html;
}
```

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```
