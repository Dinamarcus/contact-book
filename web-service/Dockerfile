# Stage 1
# Create image based on the official Node 14 image from dockerhub
FROM node:14 as node

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package*.json ./

# Install npm dependecies
RUN npm install

# Copy the source code to run the app
COPY . .

# Run the angular in product
RUN npm run build --prod

# Stage 2
FROM arm32v7/nginx

# Copy the static content to the HTML folder of NGINX
COPY --from=node /usr/src/app/dist/web-service /usr/share/nginx/html

# In case you already built your Angular app outside Docker you can directly copy the build output to the NGINX server by uncommenting line 31
# (if thats the case you can also comment/remove the steps from line 12 to line 21 for faster performance)
# COPY /dist/web-service /usr/share/nginx/html

# Copy the NGINX configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
