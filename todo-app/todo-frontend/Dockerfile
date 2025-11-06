# Stage 1: Build & Test the React (Vite) app
FROM node:20 AS build-stage
WORKDIR /usr/src/app
COPY . .

# Pass backend URL to Vite
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

# Install all dependencies
RUN npm ci

# Run tests. If tests fail, the build stops automatically
RUN npm test
# Build production files only if tests pass
RUN npm run build


# Stage 2: Use Nginx to serve the built static files
FROM nginx:1.25-alpine
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
