const express = require('express');
const app = express();

// Exprees = 2 things
// 1. Router
// 2. Middleware that comprises a webframework.
//
// Req  -------Middleware --------> Req
// Middleware functions is any function that has access to the req , res , next

//
// 1. Request comes in
// 2. We need to validate the user, sometimes.
// 3. we need to store some things in the Db
// 4. If there is data from the user we need to parse it and store it.
// 5. Res
function validateUser(req, res, next) {
  //get info out of the req object}
  //do some stuff with the DB
  //makes local valiable in the request
  res.locals.validated = true;
  console.log('VALiDATED USer!');
  next();
}
// This will run validateUser on all posts , all methods
app.use(validateUser);

//restrict middleware on path /admin
app.use('/admin', validateUser);

app.use((req, res, next) => {
  //get info out of the req object}
  //do some stuff with the DB
  //makes local valiable in the request
  res.locals.validated = true;
  console.log('VALiDATED USer!');
  next();
});

app.get('/', (req, res, next) => {
  res.send('<h1>Main page</h1>');
  console.log(res.locals);
});

app.listen(3000);
