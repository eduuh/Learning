const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(express.static('public'));
// json: this two middleware creates the req.body
// urlencoded: Used to parse the sent data and format it do the body object.
// without this. the body object is returned as undefined.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/ajax', (req, res) => {
  console.log(req.body);
  // default will send mime type text/html
  //rs.send('Test');

  // sends the data with mime type application/json
  res.json({ Name: 'Test' });
});

app.listen(3000);
