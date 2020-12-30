#!/usr/bin/env node

"use strict";
// Minimist try to parse the arguments to the write
// type
var util = require('util');
var path = require('path');
var fs = require('fs');
var minimist = require('minimist');
var getStdin = require('get-stdin')
var Transform = require('stream').Transform;
var zlib = require("zlib");

var args = minimist(process.argv.slice(2), {
   boolean: ["help", "in", "out"],
   string: ["file"]
});


var BASE_PATH = path.resolve(
  process.env.BASE_PATH || __dirname
);

var OUTFILE = path.join(BASE_PATH,"out.txt");

if(process.env.HELLO){
   console.log(process.env.HELLO)
}

if(args.help){
 printHelp();
}else if(args.files){
  let stream = fs.createReadStream(path.join(BASE_PATH,args.files));
        processFile(stream)
}else if(args.in || args._.includes('-')){
   //getStdin().then(processFile).catch(error);
  processFile(process.stdin);
}
else{
  error("Incorrect Usage", true);
}


function error(msg, includeHelp = false){
 console.error(msg);

  if(includeHelp){
    console.log("")
    printHelp();
  }
}


// *=============================
function processFile(inStream){
  var outstream;
  var upperStream = new Transform({
    transform(chunk, enc, cb){
      this.push(chunk.toString().toUpperCase());
      //setTimeout(cb, 500);
      cb();
    }
  })
  outstream = inStream.pipe(upperStream);


  var targetStream;
  if(args.out){
    targetStream = process.stdout;
  }else{
    targetStream = fs.createWriteStream(OUTFILE);
  }
  outstream.pipe(targetStream)
}

function printHelp(){
  console.log("Posixnode Usage;")
  console.log("   posixnode --file={FILENAME}")
  console.log("--help               prints out output")
  console.log("--file={FILENAME}    process the file")
  console.log("--in, -              process stdin ")
  console.log("--out                Print to stdout")
}

// using environment variable





