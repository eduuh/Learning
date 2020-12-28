const WrapperFunctionLoop = function(start, end) {
 console.log(`recursively lopping from ${start} to the ${end} value`);

 function recurse(i){
  console.log("hitting index", i);
  if(i<end){
    recurse(i + 1)
  }
 }

recurse(start);
}

function MemoForLoop(i, end) {
  console.log('looping from ${i} untill ${end}')
  if(i < end) {
    MemoForLoop(i+i, end);
  }
  
}
recursiveLoop(2,12);


