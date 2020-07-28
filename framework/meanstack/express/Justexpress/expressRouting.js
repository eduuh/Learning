const express = require('express');

const app = express();

//app object has a few methods
//Http verbs! Rest verbs . correstpond to crud app
//1. get meant to ask of a resource. Default for all browser
//2. post - Create
//3. Delete - Delete
//4. put - Update
//5. all - i will accept any method (express thing)
app.get('/', (req, res) => {
  console.log(req);
  res.send('Welcome to the home Get page');
});

app.get('/', (req, res) => {
  console.log(req);
  res.send('Welcome to the home Get 2 page');
});

app.post('/', (req, res) => {
  res.send('Welcome to the home Get page');
});

app.delete('/', (req, res) => {});

app.put('/', (req, res) => {});

app.all('/', (req, res) => {});

app.listen(3000);
console.log('The server is listeing on port 3000');
