var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'example.org',
  user: 'bob',
  password: 'secret',
  database: 'my_db',
});

// aways do it this way
module.exports = {
  query: (queryText, params, callback) => {
    pool.query(queryText, params, callback);
  },
};
