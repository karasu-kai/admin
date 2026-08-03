#!/bin/bash
set -e
npm run hostinger
cd deploy
git init -q
git checkout -b hostinger 2>/dev/null || git checkout hostinger
git add -A
git commit -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)" --allow-empty
echo "Built — hostinger branch ready to push"
