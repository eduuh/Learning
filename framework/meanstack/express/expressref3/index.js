const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
//const routes = require('./routes');
//const users = require('./routes/users');
const http = require('http');
const path = require('path');

var app = express();

var port = process.env.PORT || 3000;
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//middleware

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/name/:user_name', function(req, res) {
  res.status(200);
  res.set('Content-type', 'text/html');
  res.send('<html><body>' + '<h1>Hello ' + req.params.user_name + '</h1>' + '</body></html>');
});
app.listen(port, function() {
  console.log('The server is running, ' + 'please, open your browser at http://localhost:%s', port);
});
