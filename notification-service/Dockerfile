# Dockerfile (for notification-service)
FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3007
CMD ["npm", "start"]
