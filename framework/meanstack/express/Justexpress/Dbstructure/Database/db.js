const PoolClass = require('pg').Pool;

const pool = new PoolClass({
  user: 'postgress',
  host: 'localhost',
  database: '',
  port: 5432,
  password: '',
});

module.exports = {
  query: (queryText, params, callback) => {
    return pool.query();
  },
};
