var http = require('http')

var req = http.request({
  method: 'GET', 
  host: 'localhost',
  port: "6000"
}, 
  function(res){
  console.log(res.statusCode)
  res.pipe(process.stdout)
});

req.end('Ok');
