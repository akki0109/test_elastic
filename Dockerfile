FROM node:16-alpine as build
WORKDIR /app
COPY package.json .
RUN npm cache clean --force
RUN npm install --legacy-peer-deps
COPY . . 
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 3001
CMD ["nginx","-g","daemon off;"]
