yarn install
yarn build
cp Staticfile dist/Staticfile
cp manifest.yaml dist/manifest.yaml
cd dist
ibmcloud cf push