var express = require('express');
var router = express.Router();
const db = require('../Database/db');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
  db.query('sql statement', (error, dbresponse) => {
    conslo.log(dbresponse);
  });

  pool.end();
});

module.exports = router;
