# Use the official Node.js image as the base image for building the React app
FROM node:14 AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY client/package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the client source code to the container
COPY client/ .

# Build the React app for production
RUN npm run build

# Use a lightweight Nginx image as the final image to serve the built app
FROM nginx:alpine

# Copy the built React app from the previous stage to the Nginx web root directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the default port used by Nginx (usually port 80)
EXPOSE 80

# Start Nginx to serve the React app
CMD ["nginx", "-g", "daemon off;"]
