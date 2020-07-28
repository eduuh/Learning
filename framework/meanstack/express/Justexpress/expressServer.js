// NodeJS is the languages.
// Express is node. a node modules
// http is a native modules.

const express = require('express');
const path = require('path');
// An 'app' is the expresss uchtion (create application inside the express module)
// invoked and is an express application.
const app = express();
app.use(express.static('public'));
app.all('/', (req, res) => {
  //express handles the basic header (status code, mime-type) Awesome
  console.log(path.join(__dirname + '/node.html'));
  //sends the html file
  res.sendFile(path.join(__dirname + '/node.html'));
});

app.all('*', (req, res) => {
  res.send('Sorry this page does not exist');
});

app.listen(3000);
console.log('The server is running on port 3000');
