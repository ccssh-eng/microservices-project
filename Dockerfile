# Use an official Node image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application
COPY . .


# Expose port 3001
EXPOSE 3001

CMD ["npm", "start"]
