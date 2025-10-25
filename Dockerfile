FROM node:22.16.0-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

FROM node:22.16.0-alpine AS builder
WORKDIR /app

# Khai báo ARG cho tất cả biến build-time
ARG API_URL_EH
ARG API_RMS_URL_EH
ARG NEXT_PUBLIC_DOMAIN_EH
# Set ENV để Next.js build nhận giá trị
ENV API_URL_EH=${API_URL_EH}
ENV API_RMS_URL_EH=${API_RMS_URL_EH}
ENV NEXT_PUBLIC_DOMAIN_EH=${NEXT_PUBLIC_DOMAIN_EH}

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM node:22.16.0-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.js ./ 
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
