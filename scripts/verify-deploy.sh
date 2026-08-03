#!/bin/bash
# Verify deploy/ contains a complete Hostinger-ready site (including assets/).
set -euo pipefail

DEPLOY_DIR="${1:-deploy}"

echo "=== Verifying $DEPLOY_DIR ==="
find "$DEPLOY_DIR" -type f | sort

test -f "$DEPLOY_DIR/index.html" || { echo "ERROR: missing index.html"; exit 1; }
test -f "$DEPLOY_DIR/.htaccess" || { echo "ERROR: missing .htaccess"; exit 1; }
test -f "$DEPLOY_DIR/favicon.svg" || { echo "ERROR: missing favicon.svg"; exit 1; }
test -f "$DEPLOY_DIR/icons.svg" || { echo "ERROR: missing icons.svg"; exit 1; }
test -d "$DEPLOY_DIR/assets" || { echo "ERROR: missing assets/ folder"; exit 1; }

css_count=$(find "$DEPLOY_DIR/assets" -maxdepth 1 -name 'index-*.css' | wc -l)
js_count=$(find "$DEPLOY_DIR/assets" -maxdepth 1 -name 'index-*.js' | wc -l)

if [ "$css_count" -lt 1 ] || [ "$js_count" -lt 1 ]; then
  echo "ERROR: assets/ must contain index-*.css and index-*.js"
  exit 1
fi

echo "OK — deploy folder is complete ($(find "$DEPLOY_DIR/assets" -type f | wc -l) asset files)"
