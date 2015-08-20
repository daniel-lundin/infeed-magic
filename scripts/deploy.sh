#!/bin/bash
set -e

npm run build

git checkout gh-pages
git pull origin gh-pages
rm -r css
rm -r js
rm -r assets

cp -r dist/* .
git add css
git add js
git add assets
git commit -am "New build"


git push origin gh-pages

git checkout master
