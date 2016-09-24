/*
 * Ollie Node-Express Generator
 * iCapps 2016
 * author @samover
 *
 * server.js
 *
 */

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./config/logger');
const errorHandler = require('./lib/errorHandler')

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(logger);

const books = require('./routes/books')

app.use('/books', books);

app.use(errorHandler);

app.listen(port, () => {
  console.info(`Server listening on port ${port}`);
});
