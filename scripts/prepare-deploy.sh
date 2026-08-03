#!/bin/bash
set -e
npm run build
rm -rf deploy
mkdir -p deploy
cp -r dist/* deploy/
cp public/.htaccess deploy/
