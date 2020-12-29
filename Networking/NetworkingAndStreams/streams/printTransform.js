var fs = require('fs')
var through = require('through2')

fs.createReadStream(process.stdin)
.pipe(through(write))
.pipe(process.stdout)

function write(buf, enc, next) {
    next(null, buf.toString().toUpperCase())
}

// through transform a function and build a transform stream.
// The function are working in chunck of data, The data is arbitrary sized.
