# nidish — portfolio + blog

Terminal-themed personal site, dark with a blue accent. Live at
<https://portfolio.nidish.xyz/>.

| Path         | What                                         | Serves at |
| ------------ | -------------------------------------------- | --------- |
| `portfolio/` | React + Vite + TypeScript app (lucide icons) | `/`       |
| `blog/`      | [Zensical](https://zensical.org) static blog | `/blog/`  |

## Development

```bash
# portfolio (http://localhost:5173)
cd portfolio && npm install && npm run dev

# blog (http://localhost:8000)
cd blog && pip install zensical && zensical serve
```

Blog posts are Markdown files in `blog/docs/posts/` — add the new post to the
`nav` list in `blog/zensical.toml` and link it from `blog/docs/index.md`.

## Build

`build.sh` builds both apps and assembles the final site into `dist/`
(portfolio at the root, blog under `/blog/`). Requires Node 22+ and
Python 3.10+.

## Deployment

- **GitHub Pages** — `.github/workflows/deploy.yml` runs `build.sh` and
  publishes `dist/` on every push to `main` (Pages must be set to
  "GitHub Actions" as the build source).
- **Netlify** — `netlify.toml` runs the same `build.sh` and publishes `dist/`.
