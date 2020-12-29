var createHash = require('crypto').createHash

process.stdin
  .pipe(createHash('sha512'))
  .pipe(process.stdout);
