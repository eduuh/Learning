var fs = require('fs');
// eslint-disable-next-line no-undef
fs.createReadStream(process.argv[2]).pipe(process.stdout);

