var through = require('through2');

var size = 0;
process.stdin
  .pipe(through.obj(write))
  .pipe(through.obj(write2, end))
  .pipe(process.stdout)

function write(buf, enc, next) {
  next(null, {length: buf.length, total: size += buf.length})
}

function write2 (obj, enc, next){
  console.log('Obj=', obj)
  next();
}

function end(){
 console.log('Size=', size)
}
