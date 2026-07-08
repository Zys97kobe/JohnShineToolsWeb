#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT="${PORT:-8080}"
HOST="${HOST:-127.0.0.1}"

cd "${ROOT_DIR}"

echo "Building static tool pages..."
node scripts/build-tool-pages.mjs

echo "Starting local server..."
echo "URL: http://${HOST}:${PORT}/"
echo "Press Ctrl+C to stop."

if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server "${PORT}" --bind "${HOST}"
elif command -v python >/dev/null 2>&1; then
  python -m SimpleHTTPServer "${PORT}"
else
  echo "Python is required to run the local static server." >&2
  exit 1
fi
