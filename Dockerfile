# # Build stage
# FROM node:18 AS build
# WORKDIR /app
# COPY package.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Serve stage
# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


# Stage 1: Build the Vite app
# FROM node:18-alpine AS builder

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the container
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application files to the container
# COPY . ./

# # Build the Vite app for production
# RUN npm run build

# # Stage 2: Serve the app with Nginx
# FROM nginx:1.23-alpine

# # Remove default Nginx configuration file
# RUN rm /etc/nginx/conf.d/default.conf

# # Copy custom Nginx configuration file
# COPY nginx.conf /etc/nginx/conf.d

# # Copy the built app from the builder stage to Nginx's web root
# COPY --from=builder /app/dist /usr/share/nginx/html

# # Expose the port that Nginx is serving on
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]
# Official Image using node 20 alphine
FROM node:20-alpine  

# working directory 
WORKDIR /app/fronted

# Changes in package* . json file 
COPY package*.json ./

# Install Dependencies
RUN npm install

# Copy all changes on fronted
COPY . .

# expose the app on port 5173
EXPOSE 5173

# Start your frontend application
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0"]