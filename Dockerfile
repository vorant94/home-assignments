FROM node:alpine as builder

WORKDIR /app
COPY package.json yarn.lock decorate-angular-cli.js ./
RUN yarn install

COPY . .
RUN yarn run build --prod --output-path=dist/

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
