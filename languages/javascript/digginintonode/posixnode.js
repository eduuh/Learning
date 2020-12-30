#!/usr/bin/env node

"use strict";
// Minimist try to parse the arguments to the write
// type
var util = require('util');
var path = require('path');
var fs = require('fs');
var minimist = require('minimist');
var getStdin = require('get-stdin')

var args = minimist(process.argv.slice(2), {
   boolean: ["help", "in"],
   string: ["file"]
});

var BASE_PATH = path.resolve(
  process.env.BASE_PATH || __dirname
);

if(process.env.HELLO){
   console.log(process.env.HELLO)
}

if(args.help){
 printHelp();
}else if(args.files){

  fs.readFile(path.join(BASE_PATH,args.files), function onContents(err,contents){
    if(err){
      error(err.toString())
    }else{
        processFile(contents.toString())
  }})
}else if(args.in || args._.includes('-')){
   getStdin().then(processFile).catch(error);
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
function processFile(contents){
  contents = contents.toUpperCase();
  process.stdout.write(contents);
}
function printHelp(){
  console.log("Posixnode Usage;")
  console.log("   posixnode --file={FILENAME}")
  console.log("--help               prints out output")
  console.log("--file={FILENAME}    process the file")
  console.log("--in, -              process stdin ")
}

// using environment variable





