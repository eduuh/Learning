var convert = require('csvtojson');
const  fs = require('fs');
const through = require('through2');

var ws = fs.createWriteStream("dental.json");
var rs = fs.createReadStream('./dental-utilization-by-provider.csv');

convert().fromStream(rs)
.pipe(through(Removewhitespace))
.pipe(ws);

function Removewhitespace(buf,enc,next){
  next(null,
  buf.toString().replace(/\s/g,'').toLowerCase())
}

