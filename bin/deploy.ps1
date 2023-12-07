###########################################
#  Deploy generated static website files
###########################################

# Get current script path
$SCRIPT_DIR = split-path -parent $MyInvocation.MyCommand.Definition

# Set directory paths
$PARENT_DIR = "$SCRIPT_DIR\.."
$GITHUB_PAGE_REPO_LOCAL_PATH = "$PARENT_PATH\..\the-coin-guy.github.io"

# Copy generated static files to server repo
Copy-Item -Path "build\website\browser\" -Destination "$GITHUB_PAGE_REPO_LOCAL_PATH"

# Git commit up changes
Push-Location "$GITHUB_PAGE_REPO_LOCAL_PATH"
    git add .
    git commit -m ":rocket: Update website"
    git push
Pop-Location
