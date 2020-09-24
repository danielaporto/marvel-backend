# MARVEL API

API Rest with node.js

### To clone project
```sh
    # https
    git clone git+https://github.com/danielaporto/marvel-backend.git
```

### Environment variables
Variable | Dev
--- | ---
PORT | 3000
MARVEL_PUBLIC_KEY | -
MARVEL_PRIVATE_KEY | -
MARVEL_API_HOST | https://gateway.marvel.com/v1/public
TIMEOUT_DEFAULT | 3000
CACHE_DEFAULT | 300
DEFAULT_FIRST_PAGE | 0
DEFAULT_PAGINATION | 9

### Set envs in the terminal

```sh
export PORT=<PORT>
export MARVEL_PUBLIC_KEY=<MARVEL_PUBLIC_KEY>
export MARVEL_PRIVATE_KEY=<MARVEL_PRIVATE_KEY>
export MARVEL_API_HOST=<MARVEL_API_HOST>
export TIMEOUT_DEFAULT=<TIMEOUT_DEFAULT>
export CACHE_DEFAULT=<CACHE_DEFAULT>
export DEFAULT_FIRST_PAGE=<DEFAULT_FIRST_PAGE>
export DEFAULT_PAGINATION=<DEFAULT_PAGINATION>
```

### Running

Run the following commands:

```sh
    # Install project dependencies
    npm install or npm i

    # Start project
    npm start

    # Start project with dev module
    npm run dev
```

### Testing

To run application tests, run in project root:

Note: Delete the `node_modules`, `.nyc_output` and `.test_coverage` folders and also running `npm i` before running the `coverage` script

```sh
    # Unit tests
    npm test

    # Coverage
    npm run test:coverage
```

### Requires
- node (12.18.4)
- npm
- nvm
- git

### Note
For ".editorconfig" to work, we need to install the "EditorConfig" extension on VS Code.
