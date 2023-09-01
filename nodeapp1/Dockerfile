# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json file to the container
COPY package.json .

# Install the required dependencies
RUN npm install

# Copy the source code to the container
COPY . .

# Expose port 3000 for the Express.js application
EXPOSE 3000

# Set the command to start the Express.js application
CMD ["npm", "start"]
