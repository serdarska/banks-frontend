# Use a Node.js base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files to the container
COPY . .

# Build the Nuxt.js app
RUN npm run build

# Expose the app's default port
EXPOSE 3000

# Specify the command to run the app
CMD [ "npm", "start" ]
