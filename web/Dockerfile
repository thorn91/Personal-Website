### 1: Build ###
# Look for a local cache of node or pull it from DockerHub
FROM node:latest as build
# Create and set our working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
# Caching trick that copies all node_modules to PATH var
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# Copy pacakge.json and install dependencies
COPY package.json /usr/src/app/package.json
RUN yarn install
# Copy the rest of the application files
COPY . /usr/src/app
# Creates static app
RUN yarn run generate

### 2: nginx ###
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
