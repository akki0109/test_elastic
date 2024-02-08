FROM node:16-alpine as build

ENV PORT=3000

WORKDIR /app
COPY . .
RUN npm install --force

RUN npm run build
EXPOSE ${PORT}
CMD ["npm", "start"]


FROM nginx:1.22.1-alpine as prod-stage
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
