var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/template';
var client = new pg.Client('postgres://postgres:serebro@localhost:5432/template');
//var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE person(id SERIAL PRIMARY KEY, name VARCHAR(40) not null, comment VARCHAR(400), x INTEGER, y INTEGER)');
query.on('end', function() { client.end(); });
