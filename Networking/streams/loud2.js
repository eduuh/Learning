const fs = require('fs');
const through = require('through2');

function toUpper() {
  return through((buf, enc, next) => {
    next(null, buf.toString().toUpperCase());
  });
}

fs.createReadStream(process.stdin).pipe(toUpper()).pipe(process.stdout);
