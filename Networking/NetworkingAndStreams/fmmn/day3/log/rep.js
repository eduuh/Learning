var level = require('level')
var db1 = level('log.db')
var db2 = level('log2.db')
var hyperlog = require('hyperlog')
var log1 = hyperlog(db1, { valueEncoding: 'json' })
var log2 = hyperlog(db2, { valueEncoding: 'json' })

var r1 = log1.replicate()
var r2 = log2.replicate()
r1.pipe(r2).pipe(r1)
