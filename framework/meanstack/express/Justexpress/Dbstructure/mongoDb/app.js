var express = require('express');
const db = require('./mysqlConnect');

const app = express();

app.get('/', (req, res) => {
  const datafrominternet = 3;
  db.query('SELECT * From tasks where id > ?', [datafrominternet], function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
    res.json({ results });
  });
});

app.listen(3000);
