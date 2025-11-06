# 1. Use official Node image
FROM node:20

# 2. Set working directory inside the container
WORKDIR /usr/src/app

# 3. Copy dependency files first (for caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Install nodemon globally (for hot reload)
RUN npm install -g nodemon

# 6. Copy the rest of the source code
COPY . .

# 7. Expose the backend port
EXPOSE 3000

# 8. Default command for development
CMD ["npx", "nodemon", "index.js"]
