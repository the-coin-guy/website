#########################
#  Run docker container
#########################

# Set local variables
$DOCKER_IMAGE_NAME = "the-coin-guy/website"
$DOCKER_IMAGE_VERSION = "latest"
$DOCKER_CONTAINER_NAME = "the-coin-guy-website"
$WEB_PORT = 4200

# Stop running docker container
docker stop $DOCKER_CONTAINER_NAME 2> $null
docker rm $DOCKER_CONTAINER_NAME 2> $null

# Run the docker container
docker run --detach `
           --name $DOCKER_CONTAINER_NAME `
           -p "$WEB_PORT":"$WEB_PORT" `
           -e "PORT=$WEB_PORT" `
           "$DOCKER_IMAGE_NAME`:$DOCKER_IMAGE_VERSION"
