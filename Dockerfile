FROM node:alpine as builder

WORKDIR /app
COPY package.json package-lock.json decorate-angular-cli.js ./
RUN npm install

COPY . .
RUN npm run build -- --output-path=dist/

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
