const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
const router = require('./router');
const userRouter = require('./userRouter');

app.use('/', router);
app.use('/user', userRouter);
/*app.use('/admin', adminrouter);*/
/*app.use('/movie', movierouter);*/
/*app.use('/tv', tvrouter);*/
/*app.use('/cast', castrouter);*/

app.listen(3000);
