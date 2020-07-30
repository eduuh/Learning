const path = require('path');
const express = require('express');

const app = express();
const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');
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
    countries: [
      { name: 'kenya', size: '343434', western: true },
      { name: 'england', size: '343434', western: false },
    ],
  });
});

app.listen(3000);
