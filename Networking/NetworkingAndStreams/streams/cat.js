let concat = require('concat-stream');
let http = require('http');
let qs = require('querystring');
let through = require('through2');

var server = http.createServer(function (req, res) {
  req.pipe(through(counter)).pipe(concat({ encoding: 'string' }, onbody));

  function onbody(body) {
    var params = qs.parse(body);
    console.log(params);
    res.end('ok');
  }

  function counter() {
    var size = 0;
    return through(function (buf, enc, next) {
      size += buf.length;
      if (size > 20) {
        res.end('The Data is big');
      }
      next(null, buf);
      res.end('ok');
    });
  }
});

server.listen(5000);
