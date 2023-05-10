#  Dockerfile for Node Express Backend

#FROM node:16
#FROM node:18-alpine
FROM node:alpine

# Create App Directory
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

#http://172.16.145.31:3001

# Exports
EXPOSE 3000

CMD ["npm","start"]
