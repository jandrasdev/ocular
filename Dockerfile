FROM node:18-alpine AS build

ARG OAUTH_URI
ARG OAUTH_CLIENT_ID
ARG OAUTH_SCOPE
ARG ACKEE_HOST
ARG ACKEE_DOMAIN_ID

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
WORKDIR /app

COPY package.json pnpm-lock.yaml /app/
RUN pnpm install --frozen-lockfile

COPY . /app
RUN pnpm run build

FROM nginx:1.25-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/config/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]