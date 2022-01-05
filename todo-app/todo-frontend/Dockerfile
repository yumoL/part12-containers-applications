FROM node:16 as test-stage
WORKDIR /usr/src/app
COPY . .
RUN npm ci
CMD ["npm", "test"]

FROM test-stage as build-stage
#use 3000 and without /api as backend url port if there is no nginx in front of backend
ENV REACT_APP_BACKEND_URL=http://localhost:8080/api
WORKDIR /usr/src/app
RUN npm run build

FROM nginx:1.20-alpine
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html