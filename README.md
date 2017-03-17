
## Non-docker commands:

1. Clone:
2. `npm` install:

  `$ npm install`

  This will also install the TypeScript definitions used in this project.

3. To run the development server, run:

  `$ npm run dev-server`

  This uses `ts-node` to transpile on-the-fly and probably ain't the best idea for production.

4. To build for production, run:

  `$ npm run build`

  ... Which can then be started with:

  `$ npm start`

  Included is a Procfile that will do this for you on Heroku.

