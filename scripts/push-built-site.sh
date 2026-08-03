#!/bin/bash
# Push deploy/ contents to a git remote branch (orphan-style, site files at root).
set -euo pipefail

REMOTE_URL="$1"
BRANCH="$2"
DEPLOY_DIR="${3:-deploy}"
MESSAGE="${4:-Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)}"

cd "$DEPLOY_DIR"
git init -q
git checkout -B "$BRANCH"
git add -A
git config user.name "github-actions[bot]"
git config user.email "github-actions[bot]@users.noreply.github.com"
git commit -m "$MESSAGE" --allow-empty
git push -f "$REMOTE_URL" "$BRANCH"
