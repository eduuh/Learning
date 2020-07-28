// NodeJS is the languages.
// Express is node.
//
const express = require('express');
const patt = require('path');

const app = express();
app.use(express.static('public'));

app.all('/', (req, res) => {
  //Expres handles the basic headers status code
  //read in Node.html
  console.log(path.join(__dirname + '/node.html'));
  res.sendFile(path.join(__dirname + '/node.html'));
});

app.listen(3000);
