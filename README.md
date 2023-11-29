# The Coin Guy website


## Pre-requisites
- Locally git clone [the-coin-guy.github.io](https://github.com/the-coin-guy/the-coin-guy.github.io) git repository in same directory as this git repository


## Installation
- Install `nvm`
- Install `npm` from running `nvm use`
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
    ./bin/deploy.sh
    ```
