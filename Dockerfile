FROM node:20.9-alpine

# Create app directory
WORKDIR /home/the-coin-guy/website

# Copy over local files into docker image
COPY . ./

# Install app dependencies
RUN yarn install --frozen-lockfile

# Open up relavent port
EXPOSE 8080

# Start the webapp
CMD [ "yarn", "start", "--host" ]
