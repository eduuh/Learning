var concat = require('concat-stream')
var http = require('http')
var qs = require('querystring')

var server = http.createServer(function(req,res){
 req.pipe(concat({encoding: 'string'}, function(body){
  var params = qs.parse(body);
  console.log(params)
  res.end('ok');
 }))
//   process.stdin.pipe(concat(function(body) {
//    console.log(body.length);
//    }));
})

server.listen(5032)