## STAGE 1 : Build ##
FROM node:19-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

## STAGE 2 : Run ##
FROM nginx:1.23.3-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/todo /usr/share/nginx/html
EXPOSE 80