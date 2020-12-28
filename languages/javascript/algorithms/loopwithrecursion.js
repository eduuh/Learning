const recursiveLoop = function(start, end) {
 console.log(`recursively lopping from ${start} to the ${end} value`);

 function recurse(i){
  console.log("hitting index", i);
  if(i<end){
    recurse(i + 1)
  }
 }

recurse(start);
}


recursiveLoop(2,12);


