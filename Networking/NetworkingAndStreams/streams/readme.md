# Stream types in code.

- readable: `readable(e.pipe(A))`
- writable: `A.pipe(writable)`
- tranform: `A.pipe(transform).pipe(3)`
- duplex :   `A.pipe(duplex).pipe(A)`



example of writable stream
```javascript

var fs = require('fs')
var w = fs.createWriteStream('cool.txt')
w.on('false', function(){
   console.log("finished")
})
w.write('hi\n');
w.write('wow\n');
w.end()
```

### Readable Stream Methods

```bash
var fs = require('fs')
var r = fs.createReadStream(process.argv[2])
r.pipe(process.stdout)

```

Paused mode.

default behaviour with automatic backpressure. **Backpressure** you have a nice server and fat pipe
you try to push a video file and someone is using a phone on 2g. The client cannot handle all the data coming throug. Backpressure is a concept which your readable stream now when to stop sending data since the client will loose the packets anyway.


### Transform

readable + writable stream where:

``` bash
input > transform > output
```

#### Duplex stream

readale + writable stream where. Input is decoupled from output. The flow of information is bidirectional.

if you see.

```bash
a.pipe(stream).pipe(a)
```

```bash
var net = require('net')
net.createServer(function(stream){
  stream.pipe(stream);
}).listen(5000);
```

### Core stream in node.

Many of the Apis in node core provide stream interface.

- fs.createReadStream()
- fs.createWriteStream()
- process.stdin , process.stderr
- ps.stdin, ps.stdout, ps.stderr
- net.connect(), tls.connect()
- net.createServer(function(stream){})
- tls.createServer(opts, function(stream){})

#### http core stream.

```javascript
// req: readable , res: writable
http.createServer(function(req,res){})

// req: writable , res: readable
var req=http.request(opts, fuction(res){})
```

#### Node Js Streams in The browser.
Using a package called. **websocket-stream**

```javascript
var http = require('http')
var wsock = require('websocket-stream')
var through = require('through2')

var server = http.createServer(function(req, res)=>{
  res.end('not found')
}).listen(5000)

wsock.createServer({server: server}, function(stream){
   stream.pipe(lounder()).pipe(stream)
})

function lounder() {
return through(function (buf, enc, next){
  next(null, buf.toString().toUppercase())
})
}

```
