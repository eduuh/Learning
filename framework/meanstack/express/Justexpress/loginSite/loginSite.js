const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const helmet = require('helmet');
const { error } = require('console');
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//parses the cookies from the headers to the body object as a collection. cookies
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

// app.params -- takes 2 args
// 1. params to look for in the routes.
// 2. the callback to run with the usuals.

app.use((req, res, next) => {
  if (req.query.msg == 'fail') {
    res.locals.msg = 'Sorry, This username and password does not exist';
  } else {
    res.locals.msg = '';
  }
  //send me to the next middlware
  next();
});

app.param('id', (req, res, next, id) => {
  console.log('Params is called', id);
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

app.get('/statement', (req, res, next) => {
  //this will render the image to the browser
  //This is not the funtinallity we want.
  //res.sendFile(path.join(__dirname, '/images/receipt.jpg'));
  //res.download does a better job.
  //res.download() is Setting the headers
  //1. Content-disposition, set to attachement, with a filename of the 2nd arg
  res.download(path.join(__dirname, '/images/receipt.jpg'), 'edd.png', () => {
    console.log(error);

    //res.headersSent is a boolean, true if headers may already be sent
    //res.headersSent
  });

  // res.attachement
  // attachement only set the headers for contents disposition to attachement
  // IF you provide a file, it will also set the filename
  //res.attachement(path.join(__dirname, '/images/receipt.jpg'), 'edd.png');
});
app.get('/logout', (req, res, next) => {
  //1. takes 1 arg
  res.clearCookie('username');
  res.redirect('/');
});

// in a route , anytime something has a : in front it is a wildcard
app.get('/story/:storyid', (req, res, next) => {
  res.send('<h1>story ${req.params.storyid} </h1>');
});

//This will never run- matches above
//app.get('/story/:storyid', (req, res, next) => {
//res.send(`<h1>story ${req.params.storyid} </h1>`);
//res.send('<h1>Story one</h1>');
//});

app.get('/story/:storyid/:link', (req, res, next) => {
  res.send('<h1>story ${req.params.storyid} ${req.params.link} </h1>');
});

app.listen(3000);
