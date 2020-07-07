import express from 'express';

const app = express();

app.route('/home').get((request, response, nextHandler) => {
  response.status(200).send('Hello edwin . this is home');
});

app.get('/home', (request, response, nextHandler) => {
  response.send();
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
