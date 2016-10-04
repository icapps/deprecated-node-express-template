/**
 * index.js
 * lib/errorHandler
 *
 * Created by samover on 24/09/2016.
 * Copyright (c) 2016 iCapps. All rights reserved.
 */

'use strict';


module.exports = exports = (err, req, res) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
};
