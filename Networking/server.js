var http = require('http');
var HTTP_PORT = 3434;

var server = http.createServer(handleRequest);

main();

function main(){
  server.listen(3434);
  console.log(`Listening on http://localhost:${HTTP_PORT}`);
}

async function handleRequest(req, res){
  if(req.url === '/StkCallback'){

    res.writeHead(200, {
      "Content-Type": "application/json",
    })

    req.pipe(process.stdout);
    res.end(JSON.stringify({
       "ResponseCode": "00000000",
	  "ResponseDesc": "success"
    }))
  }
}
