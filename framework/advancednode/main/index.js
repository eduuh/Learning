const crypto = require('crypto');
// Is the file being executet in master mode?
//Im a child , Im going to act like a server and do nothing else
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    res.send('hi there');
  });
});

app.get('/fast', (req, res) => {
  res.send('hi there');
});

app.listen(3000, () => {
  console.log('listening at port 3000');
});
