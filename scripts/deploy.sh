#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD_DIR="${ROOT_DIR}/.deploy"
ARCHIVE="${BUILD_DIR}/johnshinetools-site.tar.gz"

VPS_USER="${VPS_USER:-root}"
VPS_HOST="${VPS_HOST:-38.180.204.105}"
VPS_PORT="${VPS_PORT:-22}"
REMOTE_ROOT="${REMOTE_ROOT:-/var/www/johnshinetools.com}"
REMOTE_ARCHIVE="${REMOTE_ARCHIVE:-/tmp/johnshinetools-site.tar.gz}"

FILES=(
  index.html
  styles.css
  app.js
  robots.txt
  sitemap.xml
  README.md
  assets
  image-compressor
  image-converter
  pdf-merge
  pdf-split
  pdf-compressor
  word-counter
  case-converter
  character-counter
  qr-code-generator
  password-generator
  privacy-policy
  terms-of-use
  contact
)

SSH_OPTS=(
  -p "${VPS_PORT}"
  -o StrictHostKeyChecking=accept-new
)

SCP_OPTS=(
  -P "${VPS_PORT}"
  -o StrictHostKeyChecking=accept-new
)

cd "${ROOT_DIR}"

mkdir -p "${BUILD_DIR}"
rm -f "${ARCHIVE}"

echo "Packing site files..."
node scripts/build-tool-pages.mjs
tar -czf "${ARCHIVE}" "${FILES[@]}"

run_scp() {
  scp "${SCP_OPTS[@]}" "${ARCHIVE}" "${VPS_USER}@${VPS_HOST}:${REMOTE_ARCHIVE}"
}

run_ssh() {
  ssh "${SSH_OPTS[@]}" "${VPS_USER}@${VPS_HOST}" \
    "set -e; mkdir -p '${REMOTE_ROOT}'; tar -xzf '${REMOTE_ARCHIVE}' -C '${REMOTE_ROOT}'; chown -R www-data:www-data '${REMOTE_ROOT}'; chmod -R u=rwX,g=rX,o=rX '${REMOTE_ROOT}'; nginx -t; systemctl reload nginx"
}

deploy_with_password() {
  if command -v sshpass >/dev/null 2>&1; then
    echo "Uploading archive with sshpass..."
    SSHPASS="${VPS_PASSWORD}" sshpass -e scp "${SCP_OPTS[@]}" "${ARCHIVE}" "${VPS_USER}@${VPS_HOST}:${REMOTE_ARCHIVE}"
    echo "Publishing on VPS..."
    SSHPASS="${VPS_PASSWORD}" sshpass -e ssh "${SSH_OPTS[@]}" "${VPS_USER}@${VPS_HOST}" \
      "set -e; mkdir -p '${REMOTE_ROOT}'; tar -xzf '${REMOTE_ARCHIVE}' -C '${REMOTE_ROOT}'; chown -R www-data:www-data '${REMOTE_ROOT}'; chmod -R u=rwX,g=rX,o=rX '${REMOTE_ROOT}'; nginx -t; systemctl reload nginx"
  elif command -v expect >/dev/null 2>&1; then
    echo "Uploading archive with expect..."
    expect <<EOF
set timeout -1
spawn scp ${SCP_OPTS[*]} "${ARCHIVE}" "${VPS_USER}@${VPS_HOST}:${REMOTE_ARCHIVE}"
expect {
  -re "password:" { send "$VPS_PASSWORD\r"; exp_continue }
  eof
}
set result [wait]
exit [lindex \$result 3]
EOF
    echo "Publishing on VPS..."
    expect <<EOF
set timeout -1
spawn ssh ${SSH_OPTS[*]} "${VPS_USER}@${VPS_HOST}" "set -e; mkdir -p '${REMOTE_ROOT}'; tar -xzf '${REMOTE_ARCHIVE}' -C '${REMOTE_ROOT}'; chown -R www-data:www-data '${REMOTE_ROOT}'; chmod -R u=rwX,g=rX,o=rX '${REMOTE_ROOT}'; nginx -t; systemctl reload nginx"
expect {
  -re "password:" { send "$VPS_PASSWORD\r"; exp_continue }
  eof
}
set result [wait]
exit [lindex \$result 3]
EOF
  else
    echo "VPS_PASSWORD is set, but neither sshpass nor expect is installed. Falling back to interactive SSH prompts."
    run_scp
    run_ssh
  fi
}

if [[ -n "${VPS_PASSWORD:-}" ]]; then
  deploy_with_password
elif command -v expect >/dev/null 2>&1; then
  read -r -s -p "VPS password for ${VPS_USER}@${VPS_HOST} (leave empty to use SSH key): " VPS_PASSWORD
  echo
  if [[ -n "${VPS_PASSWORD}" ]]; then
    deploy_with_password
  else
    echo "Uploading archive with SSH key or agent."
    run_scp
    echo "Publishing on VPS with SSH key or agent."
    run_ssh
  fi
else
  echo "Uploading archive. Enter the VPS password if SSH asks for it."
  run_scp
  echo "Publishing on VPS. Enter the VPS password again if SSH asks for it."
  run_ssh
fi

echo "Deployment complete: http://${VPS_HOST}/"
