#!/usr/bin/env bash
#######################
#  Build docker image
#######################

# Get current script path
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# Set directory paths
PARENT_DIR="$SCRIPT_DIR"/..

# Set local variables
DOCKER_IMAGE_NAME="the-coin-guy/website"
DOCKER_IMAGE_VERSION="latest"

# Build docker image
docker build \
    --tag "$DOCKER_IMAGE_NAME:$DOCKER_IMAGE_VERSION" \
    "$PARENT_DIR"
