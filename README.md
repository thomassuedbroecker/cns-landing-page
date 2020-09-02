# cloud-native-starter.com Website

## Connect to IBM Cloud 

```sh
ibmcloud login -sso
ibmcloud target -o [CF-ORG] -s [CF-SPACE] --cf-api [https://api.us-south.cf.cloud.ibm.com] -g [default]
sh deployCF.sh
```

## Configure pipline jobs for the deployment

```sh
#!/bin/bash
echo "-----------------------------"
echo " install yarn"
echo "-----------------------------"
curl -o- -L https://yarnpkg.com/install.sh | bash
export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

echo "-----------------------------"
echo "deploy landing page"
echo "-----------------------------"

echo "build application"
cd landing
yarn install
yarn build
cp Staticfile dist/Staticfile
cp manifest.yaml dist/manifest.yaml
cd dist

echo "-----------------------------"
echo "deploy application"
echo "-----------------------------"
cf push
```

# Run the applications locally

## Landing

...

```sh
git clone
cd landing
yarn install
yarn serve
```

## Synchron

...

```sh
git clone
cd synchron
yarn install
yarn serve
```

## Reactive

...

```sh
git clone
cd reactive
yarn install
yarn serve
```

## Security 

...

```sh
git clone
cd security
yarn install
yarn serve
```

# System prerequisites

* yarn v1.22.4
* node v14.6.0
* npm version
```json
{
  'carbon-tutorial-vue': '0.1.0',
  npm: '6.14.7',
  ares: '1.16.0',
  brotli: '1.0.7',
  cldr: '37.0',
  icu: '67.1',
  llhttp: '2.0.4',
  modules: '83',
  napi: '6',
  nghttp2: '1.41.0',
  node: '14.6.0',
  openssl: '1.1.1g',
  tz: '2019c',
  unicode: '13.0',
  uv: '1.38.1',
  v8: '8.4.371.19-node.12',
  zlib: '1.2.11'
}
```