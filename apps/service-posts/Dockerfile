# extends from https://github.com/vercel/turborepo/blob/main/examples/with-docker/apps/api/Dockerfile
FROM node:20-alpine AS base

FROM base AS builder
WORKDIR /app
RUN npm i -g turbo
COPY . .
RUN turbo prune service-posts --docker

# Builder stage
## Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
WORKDIR /app
## First install the dependencies (as they change less often)
RUN npm i -g pnpm
COPY --from=builder /app/out/json/ .
RUN pnpm install
## Build the project
COPY --from=builder /app/out/full/ .
RUN pnpm run build
RUN pnpm prune --prod

# Runner stage
FROM base AS runner
WORKDIR /app
## Don't run production as root
RUN addgroup --system --gid 1001 service
RUN adduser --system --uid 1001 service
USER service
COPY --from=installer /app/apps/service-posts/dist .

CMD node ./index.mjs