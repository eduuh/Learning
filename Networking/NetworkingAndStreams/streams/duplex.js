const net = require('net')
const server = net.createServer(function(stream){
  stream.pipe(stream);
});

server.listen({
  host: 'localhost',
  port: '5023'
});
 
