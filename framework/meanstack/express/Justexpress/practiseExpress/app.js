const express = require('express');
const path = require('path');
const app = express();
const helmet = require('helmet');
app.use(helmet());

const cookie = require('cookie-parser');
app.use(cookie());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const router = require('./routes/router');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');

app.use('/', router);
app.use('/user', userRouter);
app.use('/admin', adminRouter);

app.listen(3000);
