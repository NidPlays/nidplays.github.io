# nidish — portfolio + blog

Personal site built around the photographs: a near-black ground at almost zero
chroma so the pictures carry all the colour, one apricot signal pulled out of
the dusk frame, and Archivo worked across its width and weight axes. Live at
<https://portfolio.nidish.xyz/>.

| Path         | What                                         | Serves at |
| ------------ | -------------------------------------------- | --------- |
| `portfolio/` | React + Vite + TypeScript app (lucide icons) | `/`       |
| `blog/`      | [Zensical](https://zensical.org) static blog | `/blog/`  |

Both halves share one set of design tokens — `portfolio/src/index.css` is the
source of truth, and `blog/docs/stylesheets/extra.css` mirrors it in hex for
the Material theme. Change a colour in one, change it in the other.

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
