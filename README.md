# The Coin Guy website


## Installation
- Install `nvm`
- Install `npm` from running `nvm (cat .nvmrc)`
- Install `yarn` from running `npm install -g yarn`
- Install node dependencies from running `yarn install`


## Development
- In order to start the local web server, run:
    ```bash
    yarn start
    ```

- Visit [http://localhost:4200/](http://localhost:4200/) locally


## Deployment
- In order to build the static files, run:
    ```bash
    yarn build
    ```

- Copy the contents of the generated `dist/` into the root of the local [the-coin-guy.github.io](https://github.com/the-coin-guy/the-coin-guy.github.io) git repository
    ```bash
    GITHUB_PAGE_REPO_LOCAL_PATH="../the-coin-guy.github.io"
    cp -r dist/* $GITHUB_PAGE_REPO_LOCAL_PATH
    cd $GITHUB_PAGE_REPO_LOCAL_PATH
    git commit -m ":rocket: Update website"
    git push
    ```
