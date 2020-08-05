const PoolClass = require('pg').Pool;
const express = require('express');
const app = express();

const pool = new PoolClass({
  user: 'postgress',
  host: 'localhost',
  database: '',
  port: 5432,
  password: '',
});

app.get('/', (req, req) => {
  pool.query('sql statement', (error, dbresponse) => {
    conslo.log(dbresponse);
    res.json(dbresponse.rows);
  });
  pool.end();
});

app.listen(3000);
