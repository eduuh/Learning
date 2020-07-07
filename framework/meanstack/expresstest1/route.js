const express = require('express');

const app = express();

app.use(express.static('static'));

app.get('/hello', (req, res) => {
  console.log(req.statusCode);
  res.status(403).send('Access Denied');
  res.json('hello world!');
});

app.listen(3000, () => {
  console.log('App started on port 3000');
});
