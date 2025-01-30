# Base image
FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

# Debug: Show node version and environment
RUN node -v && npm -v && whoami

# Builder Stage
FROM base as builder
WORKDIR /app
COPY . .

# Debug: Check file ownership before install
RUN ls -la /app

# Install dependencies and build
RUN npm install && npm run build

# Debug: Check if .next directory is created properly
RUN ls -la /app && ls -la /app/.next || echo ".next directory missing!"

# Fix permissions
RUN chown -R `whoami` ~/.npm
RUN chown -R `whoami` /usr/local/lib/node_modules
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

# Production Stage
FROM base as production
WORKDIR /app
ENV NODE_ENV=production

# Copy built files with ownership check
COPY --from=builder --chown=1001:1001 /app/.next ./.next
COPY --from=builder --chown=1001:1001 /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Debug: Verify copied files
RUN ls -la /app

# Ensure correct permissions
RUN chmod -R 755 /app/node_modules/.bin
RUN chmod +x /app/node_modules/.bin/next
RUN chown -R 1001:1001 /app

# Debug: Check final permissions
RUN ls -la /app && ls -la /app/.next || echo "Missing .next directory!"

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Switch user
USER nextjs

CMD ["node", "node_modules/next/dist/bin/next", "start"]

# Dev Stage (for local development)
FROM base as dev
ENV NODE_ENV=development

RUN npm install 
COPY . .

# Debug: Check file permissions in dev
RUN ls -la /app

CMD ["npm", "run", "dev"]
