var split = require('split2')
const through2 = require('through2')
var lincount = 0

process.stdin
   .pipe(split())
   .pipe(through2(write, end));


function write(buf, enc, next){
      lincount +=1;
     //console.log(buf)
     next()
  }
function end(){
  console.log(lincount);
}

// echo 'one\ntwo\nthree' | node lincount.js
// echo 'one\ntwo\n\three'
