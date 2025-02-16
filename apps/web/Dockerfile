# extends from https://github.com/vercel/turborepo/blob/main/examples/with-docker/apps/web/Dockerfile
FROM node:20-alpine AS base

FROM base AS builder
WORKDIR /app
RUN npm i -g turbo
COPY . .
RUN turbo prune web --docker

# Builder stage
## Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
WORKDIR /app
## First install the dependencies (as they change less often)
## should use corepack enable, but currently there is signatures bug
RUN npm i -g pnpm
COPY --from=builder /app/out/json/ .
RUN pnpm install
## Build the project
COPY --from=builder /app/out/full/ .
RUN pnpm run build

# Runner stage
FROM nginx:alpine-slim AS runner
COPY --from=installer /app/apps/web/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=installer /app/apps/web/dist /usr/share/nginx/html
