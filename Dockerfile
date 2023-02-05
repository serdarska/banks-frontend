# Use a node.js image as base
FROM node:16

# Copy the necessary files for the frontend to the image
COPY . /app
WORKDIR /app

# Install dependencies
RUN npm install

# Set environment variables for the frontend
ENV API_URL=http://localhost:8080

# Build the frontend
RUN npm run build

# Expose port 3000 for the frontend
EXPOSE 3000

# Run the frontend when a container is started from the image
CMD ["npm", "start"]
