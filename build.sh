#!/usr/bin/env bash
# Builds the whole site into ./dist:
#   /       -> portfolio (React + Vite)
#   /blog/  -> blog (Zensical)
# Used by both GitHub Actions (.github/workflows/deploy.yml) and Netlify
# (netlify.toml), so the two deployments stay identical.
set -euo pipefail
cd "$(dirname "$0")"

echo "==> Building portfolio (Vite)"
(cd portfolio && npm ci && npm run build)

echo "==> Building blog (Zensical)"
pip install --quiet zensical
(cd blog && zensical build)

echo "==> Assembling dist/"
rm -rf dist
mkdir dist
cp -r portfolio/dist/. dist/
mkdir -p dist/blog
cp -r blog/site/. dist/blog/
cp -r .well-known dist/

echo "==> Done: $(du -sh dist | cut -f1) in dist/"
