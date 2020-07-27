// NodeJS is the languages.
// Express is node. a node modules
// http is a native modules.

const express = require('express');
// An 'app' is the expresss uchtion (create application inside the express module)
// invoked and is an express application.
const app = express();

app.all('*', (req, res) => {
  //express handles the basic header (status code, mime-type) Awesome
  res.send('<h1>This is the home page</h1>');
});

app.listen(3000);
console.log('The server is running on port 3000');
