const fs = require('fs');

const Transform = require('stream').Transform;

function toUpper() {
  return new Transform({
    transform: (buf, enc, next) => {
      next(null, buf.toString().toUpperCase());
    },
  });
}

fs.createReadStream(process.stdin).pipe(toUpper()).pipe(process.stdout);
