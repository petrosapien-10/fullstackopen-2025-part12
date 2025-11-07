FROM node:20-alpine

WORKDIR /usr/src/app

# Install dependencies separately to leverage Docker layer caching
COPY package*.json ./
RUN npm install

# Copy the rest of the backend source
COPY . .

EXPOSE 3003

CMD ["npm", "run", "dev"]
