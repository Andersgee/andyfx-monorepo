#container from pruned repo, without build
FROM node:16-alpine as base
RUN apk update

FROM base AS pruner
ARG SCOPE
ENV SCOPE ${SCOPE}
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=${SCOPE} --docker


FROM base AS installer
WORKDIR /app
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/yarn.lock ./yarn.lock
RUN yarn install --frozen-lockfile


FROM base AS sourcer
ARG SCOPE
ENV SCOPE ${SCOPE}
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=pruner /app/out/full/ .
ENV NODE_ENV=production
#RUN yarn turbo run build --scope=${SCOPE} --include-dependencies --no-deps
CMD yarn turbo run start --scope=${SCOPE}
