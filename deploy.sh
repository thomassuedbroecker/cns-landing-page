yarn install
yarn build
cp CNAME dist/CNAME
cp 400.html dist/404.html
git subtree push --prefix dist origin gh-pages