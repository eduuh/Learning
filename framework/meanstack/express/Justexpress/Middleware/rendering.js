const path = require('path');
const express = require('express');

const app = express();
const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

function validateUser(req, res, next) {
  //..validated logic
  res.locals.validated = true;
  next();
}

app.use(validateUser);

app.get('/', (req, res, next) => {
  console.log('this is express: ');
  //the data in the 2 arg, is going to be appended in res.locals
  res.render('index', {
    msg: 'success ',
    msg2: 'failure ',
    //htmp came from the database
    html: '<p>hello this is edd</p>',
  });
});

//steps to use res.render
//1. Express as we know it happens. This file
//2. We define a view engine
//EJS  MUstach Handlebars  Jade/Pug
//3. Inside one of our routes, we have a res.renderhttps://github.com/robertbunch/jquery-todo.git
//4. We pass the res.render things -  the data we waint to send to that file
//6. The final result of this procee is a compiled product of the things the browser can read.
//HTML JS, CSS

app.listen(3000);
