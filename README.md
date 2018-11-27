# basic-express-server

This is a basic Express app that uses Handlebars as the template engine.

## Start the server

Run `node index.js` to start the server. You will need to define a port somewhere (preferably in a `.env` file)

## Homepage

The homepage will tell you hello.

## Save route

In Postman or HTTPie, make a post request to ```/save``` with valid JSON. Trying to post invalid JSON will result in a 500 server error.

## Invalid Routes

Routes that are not mentioned above will throw a 404 page.

## Stop the server

Press ```ctrl c``` to stop the server