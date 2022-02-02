#modified from https://github.com/vercel/turborepo/issues/215#issuecomment-1019937598

# This Dockerfile builds a container for a specific app inside the folder "apps"
# specify which app with --build-arg SCOPE=foldername 
# it assumes app is built with yarn install + yarn build
# note: scope is name of the app in its package.json

ARG SCOPE

# base node image
FROM node:16-alpine AS base
RUN apk update
WORKDIR /app
ENV YARN_CACHE_FOLDER=.yarn-cache

# sourcer
FROM base AS sourcer
ARG SCOPE
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=${SCOPE} --docker

# deps
FROM base AS deps
COPY --from=sourcer /app/out/json/ .
COPY --from=sourcer /app/out/yarn.lock ./yarn.lock
RUN yarn install

# prod deps
FROM base AS prod-deps
COPY --from=sourcer /app/out/json/ .
COPY --from=sourcer /app/out/yarn.lock ./yarn.lock
COPY --from=deps /app/ .
RUN yarn install --production --ignore-scripts --prefer-offline
RUN yarn cache clean

# builder
FROM base AS builder
ARG SCOPE
COPY --from=deps /app/ .
COPY --from=sourcer /app/out/full/ .
COPY turbo.json ./
RUN yarn turbo run build --scope=${SCOPE} --include-dependencies --no-deps

# runtime
FROM base
ARG SCOPE
ENV NODE_ENV=production
COPY --from=prod-deps /app/ .
WORKDIR /app/apps/${SCOPE}
COPY --from=builder /app/apps/${SCOPE}/.next ./.next
EXPOSE 3000
CMD ["yarn", "start"]