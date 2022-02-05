# andyfx-monorepo

testing turborepo

```bash
yarn install
yarn dev
```

### build

```
yarn build
```

### build (individual containers)

```bash
sudo docker build --build-arg APP_SCOPE=portfolio --tag andersgee/portfolio:latest .
sudo docker build --build-arg APP_SCOPE=svgbattle --tag andersgee/svgbattle:latest .
sudo docker build --build-arg APP_SCOPE=api2 --tag andersgee/api2:latest --file Dockerfile_no_build .

sudo docker push andersgee/portfolio
sudo docker push andersgee/svgbattle
sudo docker push andersgee/api2
```
