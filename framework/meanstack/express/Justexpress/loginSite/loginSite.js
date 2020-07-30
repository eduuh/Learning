const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const helmet = require('helmet');
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//parses the cookies from the headers to the body object as a collection. cookies
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use((req, res, next) => {
  if (req.query.msg == 'fail') {
    res.locals.msg = 'Sorry, This username and password does not exist';
  } else {
    res.locals.msg = '';
  }
  //send me to the next middlware
  next();
});

app.get('/login', (req, res, next) => {
  // The req object has a query property in express.
  // The data passed through query string should be insecure
  //
  const msg = req.query.msg;
  if (msg === 'fail') {
    //do something here
  }
  console.log(req.query);
  res.render('login');
});

app.get('/', (req, res, next) => {
  res.json('sanity check');
});

app.post('/process_login', (req, res, next) => {
  const password = req.body.password;
  const username = req.body.username;
  //if they are validate
  //send them to the homepage. save the username as a cookie
  if (password === 'x') {
    res.cookie('username', username);
    res.redirect('/welcome');
  } else {
    res.redirect('/login?msg=fail&test=hello');
  }
  //res.json(req.body);
});

app.get('/welcome', (req, res, next) => {
  res.render('welcome', {
    username: req.cookies.username,
  });
});

app.get('/logout', (req, res, next) => {
  //1. takes 1 arg
  res.clearCookie('username');
  res.redirect('/');
});
app.listen(3000);
