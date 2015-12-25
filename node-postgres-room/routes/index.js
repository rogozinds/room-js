var express = require('express');
var router = express.Router();
module.exports = router;
var pg = require('pg');
var path = require('path');
//var connectionString = require(path.join(__dirname, '../', '../', 'config'));
var connectionString='postgres://postgres:serebro@localhost:5432/template';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/v1/todos', function(req, res) {

  var results = [];
  console.log(req.body);
  // Grab data from http request
  var data = {text: req.body.text, complete: req.body.complete};
  console.log(data);
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    // SQL Query > Insert Data
    client.query("INSERT INTO person(name) values($1)", [data.text]);

    // SQL Query > Select Data
    var query = client.query("SELECT * FROM person ORDER BY id ASC");

    // Stream results back one row at a time
    query.on('row', function(row) {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', function() {
      done();
      return res.json(results);
    });


  });

});
router.get('/api/v1/todos', function(req, res) {

  var results = [];
  console.log("HI");
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    // SQL Query > Select Data
    var query = client.query("SELECT * FROM person ORDER BY id ASC;");

    // Stream results back one row at a time
    query.on('row', function(row) {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', function() {
      done();
      return res.json(results);
    });

  });

});

router.put('/api/v1/todos/:todo_id', function(req, res) {

  var results = [];

  // Grab data from the URL parameters
  var id = req.params.todo_id;

  // Grab data from http request
  var data = {text: req.body.text, complete: req.body.complete};

  console.log("ID"+id);
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).send(json({ success: false, data: err}));
    }

    // SQL Query > Update Data
    client.query("UPDATE items SET text=($1), complete=($2) WHERE id=($3)", [data.text, data.complete, id]);

    // SQL Query > Select Data
    var query = client.query("SELECT * FROM items ORDER BY id ASC");

    // Stream results back one row at a time
    query.on('row', function(row) {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', function() {
      done();
      return res.json(results);
    });
  });

})

router.delete('/api/v1/todos/:todo_id', function(req, res) {

  var results = [];

  // Grab data from the URL parameters
  var id = req.params.todo_id;


  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    // SQL Query > Delete Data
    client.query("DELETE FROM items WHERE id=($1)", [id]);

    // SQL Query > Select Data
    var query = client.query("SELECT * FROM items ORDER BY id ASC");

    // Stream results back one row at a time
    query.on('row', function(row) {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', function() {
      done();
      return res.json(results);
    });
  });

});