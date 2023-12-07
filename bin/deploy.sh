#!/usr/bin/env bash
###########################################
#  Deploy generated static website files
###########################################

# Get current script path
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# Set variables
PARENT_PATH="$SCRIPT_DIR/.."
GITHUB_PAGE_REPO_LOCAL_PATH="$PARENT_PATH/../the-coin-guy.github.io"

# Copy generated static files to server repo
cp -r build/website/browser/* "$GITHUB_PAGE_REPO_LOCAL_PATH"

# Git commit up changes
pushd "$GITHUB_PAGE_REPO_LOCAL_PATH"
    git add .
    git commit -m ":rocket: Update website"
    git push
popd
