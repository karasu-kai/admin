# Karasu Kai — admin

Brand assets and staging tooling for [Karasu Kai](https://www.karasukai.com.au).

## Yatagarasu crow mark

Slight brand inclusion exploring a **three-legged crow** (yatagarasu / 八咫烏) for the empty crow slot on the main site.

### Preview

```bash
cd brand && python3 -m http.server 8080
# open http://localhost:8080
```

### Assets

| File | Use |
|------|-----|
| `brand/assets/yatagarasu.svg` | Primary — white + red eye on dark |
| `brand/assets/yatagarasu-mono.svg` | `currentColor` for tinting |
| `brand/assets/yatagarasu-line.svg` | Stroke / favicon-adjacent |
| `brand/index.html` | Full inclusion review |
| `brand/snippet.html` | Drop-in markup for `.l-crow-slot` |

System tokens unchanged: Syne + DM Mono, `#0d0d0d` field, accent `#c8102e`.
