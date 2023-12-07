#######################
#  Build docker image
#######################

# Get current script path
$SCRIPT_DIR = split-path -parent $MyInvocation.MyCommand.Definition

# Set directory paths
$PARENT_DIR = "$SCRIPT_DIR\.."

# Set local variables
$DOCKER_IMAGE_NAME = "the-coin-guy/website"
$DOCKER_IMAGE_VERSION = "latest"

# Build docker image
docker build `
    --tag "$DOCKER_IMAGE_NAME`:$DOCKER_IMAGE_VERSION" `
    $PARENT_DIR
