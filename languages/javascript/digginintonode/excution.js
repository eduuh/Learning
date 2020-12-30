#!/usr/bin/env node
'use strict';

var minimist = require('minimist')
var path = require('path')
var fs = require('fs');
var getStdin = require('get-stdin');


var parsedargs = minimist(process.argv.slice(2),{
   boolean: ['help','in'],
   string: ['file']
});

var BASE_PATH = path.resolve(process.env.BASE_PATH || __dirname);

if(parsedargs.help){
   PrintHelp()
}else if(parsedargs.file){
  fs.readFile(path.join(BASE_PATH,parsedargs.file),function onContent(err, content) {
    if(err){
       error(err)
    }else{
      processFile(content.toString());
    }
  });

}else if(
  parsedargs.in || 
  parsedargs._.includes('-')
){
    getStdin().then(processFile).catch(error)
}


function processFile(contents){
 contents=contents.toString().toUpperCase()
  process.stdout.write(contents);
}

function PrintHelp(){
  console.log("excution help")
  console.log("./excution --files={filename}")
  console.log("--help  this will print out help")
  console.log("--in, - reads from the stdout")
  
}

function error(err, printHelp = false){
  console.log(err)
  if(printHelp){
    PrintHelp()
  }
}


