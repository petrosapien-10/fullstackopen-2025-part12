# dev.Dockerfile
FROM node:20

WORKDIR /usr/src/app

# Copy all source files
COPY . .

# Use npm install (not ci) for dev flexibility
RUN npm install

# Expose port 5173 for Vite
EXPOSE 5173

# Start Vite in dev mode, make it visible outside Docker network
CMD ["npm", "run", "dev", "--", "--host"]
