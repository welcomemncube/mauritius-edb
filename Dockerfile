FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

FROM base as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

FROM base as production
WORKDIR /app
ENV NODE_ENV=production

# Copy built files
COPY --from=builder --chown=1001:1001 /app/.next ./.next
COPY --from=builder --chown=1001:1001 /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Ensure correct permissions
RUN chmod -R 755 /app/node_modules/.bin
RUN chmod +x /app/node_modules/.bin/next
RUN chown -R 1001:1001 /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

CMD ["node", "node_modules/next/dist/bin/next", "start"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install 
COPY . .
CMD ["npm", "run", "dev"]
