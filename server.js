/**
 * This is just a dummy server to facilidate our React SPA examples.
 * For a more professional setup of Express, see...
 * http://expressjs.com/en/starter/generator.html
 */

import express from 'express';
import helmet from 'helmet';
import mysql from 'mysql';
import path from 'path';

function getPublicDBConn(db) {
  return mysql.createPool({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'guest',
    password : 'Passw0rd!',
    database : db,
    debug    : false
  });
}

var notIMDBConnection = getPublicDBConn('not_imdb');
var politifactDBConnection = getPublicDBConn('politifact');

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
  notIMDBConnection.getConnection(function(err, connection) {
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
          return;
      }
      res.json({"rows": rows, "schema": fields});
      return;
    });

    console.log("Connected to DB with id: " + connection.threadId);
    connection.on('error', function(err) {
      res.json({"code" : 100, "status" : "Error in connection database: '" + err + "'"});
      return;
    });
  });
});

app.get('/api/politifact/names', function(req, res) {
  politifactDBConnection.getConnection(function(err, connection) {
    if (err) {
      connection.release();
      res.json({"code": 100, "status": "Could not connect to database"});
      return;
    }
    console.log('Request: [GET]', req.originalUrl);
    var query = 'SELECT name, photo_url FROM Speakers ORDER BY name';
    connection.query(query, function(err, rows, fields) {
      if (err) {
        res.json({"code": 500, "status": "Error processing query: '" + err + "'"});
      } else {
        res.json(rows);
      }
    });
  });
});

app.get('/api/politifact/query', function(req, res) {
  politifactDBConnection.getConnection(function(err, connection) {
    if (err) {
      connection.release();
      res.json({"code": 100, "status": "Could not connect to database"});
      return;
    }
    console.log('Request: [GET]', req.originalUrl);

    var query = 'SELECT ru.name AS ruling, COUNT(st.id) AS count '
      + 'FROM Statements AS st '
      + 'INNER JOIN ('
          + 'SELECT id'
          + 'FROM Speakers '
          + 'WHERE name = "' + req.query.name + '" '
      + ') AS sp ON st.speaker = sp.id '
      + 'RIGHT OUTER JOIN Rulings AS ru ON st.ruling = ru.id '
      + 'GROUP BY ru.id, ru.name '
      + 'ORDER BY ru.id;'
    console.log(query);
    connection.query(query, function(err, rows, fields) {
      connection.release();
      if (err) {
        res.json({"code": 500, "status": "Error processing query: '" + err + "'"});
      } else {
        res.json(rows);
      }
    });
  });
});


/**
 * Always serve the same HTML file for all requests
 */
app.get('*', function(req, res, next) {
  console.log('Request: [GET]', req.originalUrl);
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});


/**
 * Error Handling
 */
app.use(function(req, res, next) {
  console.log('404');
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
const port = 15301;
app.listen(port);

console.log('Visit: localhost:' + port);
