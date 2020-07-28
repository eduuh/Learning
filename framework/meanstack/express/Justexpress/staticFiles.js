const express = require('express');
const app = express();

//app come with the use Method
//1000 points for express
// Some people use the public directory to serve entire sites

app.use(express.static('public'));

app.listen(3000);
console.log('Server listening on port 3000');
