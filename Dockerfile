FROM node:19 as build

WORKDIR /usr/src/app

COPY package.json package*.json *.tgz ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:stable

COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /app
WORKDIR /app
COPY --from=build /usr/src/app/dist /app/build

CMD ["nginx"]