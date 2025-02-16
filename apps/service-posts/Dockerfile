# extends from https://github.com/vercel/turborepo/blob/main/examples/with-docker/apps/api/Dockerfile
FROM node:20-slim AS base

FROM base AS builder
WORKDIR /app
RUN npm i -g turbo
COPY . .
RUN turbo prune service-posts --docker

# Runner stage
## Current we don't build service, just run it directly, so don't need a build stage, this could be improved
FROM base AS runner
WORKDIR /app
## should use corepack enable, but currently there is signatures bug
RUN npm i -g pnpm
COPY --from=builder /app/out/full/ .
RUN pnpm install
# Don't run production as root
# RUN addgroup --system --gid 1001 service
# RUN adduser --system --uid 1001 service
# USER service

CMD pnpm run --filter service-posts start