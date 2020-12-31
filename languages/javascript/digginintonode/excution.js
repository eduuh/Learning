#!/usr/bin/env node
'use strict';
var minimist = require('minimist')
var path = require('path')
var fs = require('fs');
//var getStdin = require('get-stdin');
var Transform = require('stream').Transform;
var zlib = require('zlib');


var parsedargs = minimist(process.argv.slice(2),{
   boolean: ['help','in', 'compress', 'uncompress','out'],
   string: ['file']
});

var BASE_PATH = path.resolve(process.env.BASE_PATH || __dirname);
var OUTFILE = path.join(BASE_PATH, "out.txt");


if(parsedargs.help){
   PrintHelp()
}else if(parsedargs.file){
    var stream = fs.createReadStream(path.join(BASE_PATH,parsedargs.file));
    processFile(stream);
}else if(
  parsedargs.in || 
  parsedargs._.includes('-')
){
   processFile(process.stdin);
}


function processFile(inStream){
  var outstream = inStream;

  if(parsedargs.uncompress){
    var creategunzip = zlib.createGunzip();
    outstream = outstream.pipe(creategunzip);
  }

  var UpperCase = new Transform({
    transform(chuck, enc, cb){
       this.push(chuck.toString().toUpperCase());
       cb();
    }
  });


  outstream = inStream.pipe(UpperCase);

   if(parsedargs.compress){
    var createGzip = zlib.createGzip();
     outstream = outstream.pipe(createGzip);
     OUTFILE = `${OUTFILE}.gz`
   }

  var targetStream;
  if(parsedargs.out){
    targetStream = process.stdout;
  }else{
    targetStream = fs.createWriteStream(OUTFILE);
  }


  outstream.pipe(targetStream);

}

function PrintHelp(){
  console.log("excution help")
  console.log("./excution --files={filename}")
  console.log("--help           this will print out help")
  console.log("--in, -          reads from the stdin")
  console.log("--compress       gzip the solution")
  console.log("--uncompress     un-gunzip the solution")
}

function error(err, printHelp = false){
  console.log(err)
  if(printHelp){
    PrintHelp()
  }
}

