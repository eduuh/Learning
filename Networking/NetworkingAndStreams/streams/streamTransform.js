var fs = require('fs')
var Transform = require('stream').Transform

fs.createReadStream(process.argv[2])
.pipe(toUpper())
.pipe(process.stdout)

function toUpper() {
return new Transform({
    transform: function(buf, enc,next) {
    next(null, buf.toString().toUpperCase())
    }
});
}

// through transform a function and build a transform stream.
// The function are working in chunck of data, The data is arbitrary sized.
