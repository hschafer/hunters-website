/**
 * This is just a dummy server to facilidate our React SPA examples.
 * For a more professional setup of Express, see...
 * http://expressjs.com/en/starter/generator.html
 */

import express from 'express';
import helmet from 'helmet';
import mysql from 'mysql';
import path from 'path';

var connectionPool = mysql.createPool({
  connectionLimit : 100,
  host     : 'localhost',
  user     : 'guest',
  password : 'Passw0rd!',
  database : 'not_imdb',
  debug    : false
});

const app = express();
app.use(helmet());

/**
 * Anything in public can be accessed statically without
 * this express router getting involved
 */

app.use(express.static(path.join(__dirname, '..', 'public'), {
  dotfiles: 'ignore'
}));

app.get('/api/query', function(req, res) {
  connectionPool.getConnection(function(err, connection) {
    if (err) {
      connection.release();
      res.json({"code": 100, "status": "Could not connect to database"});
      return;
    }
    console.log("Query: " + req.query.q);
    connection.query(req.query.q, function(err, rows, fields) {
      connection.release();
      if (err) {
        res.json({"code": 500, "status": "Error processing query: '" + err + "'"})
      }
      res.json({"rows": rows, "schema": fields});
      return;
    });

    console.log("Connected to DB with id: " + connection.threadId);
    connection.on('error', function(err) {
      res.json({"code" : 100, "status" : "Error in connection database: '" + err + "'"});
      return;
    });
  })
})


/**
 * Always serve the same HTML file for all requests
 */
app.get('*', function(req, res, next) {
  console.log('Request: [GET]', req.originalUrl)
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});


/**
 * Error Handling
 */
app.use(function(req, res, next) {
  console.log('404')
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.sendStatus(err.status || 500);
});


/**
 * Start Server
 */
const port = 80;
app.listen(port);

console.log('Visit: localhost:' + port);
