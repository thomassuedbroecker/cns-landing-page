yarn install
yarn build
cp CNAME dist/CNAME
git subtree push --prefix dist origin gh-pages