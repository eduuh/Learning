var tracker = 0;

var callMe = function(arg) {
 tracker++;   2
 console.log(tracker);
 if( tracker === 3){
    tracker = 0;
 return `loops ${arg}`;
 }
 return callMe('anytime');
}


const factorial = n => {
 const cache = {}

  if(n in cache ) {
    console.log("fetching factorial from cache");
    return cache[n];
  }

  if(n <= 0 ) throw Error; 
  if(n === 1){ return 1} else{
    var result = n * factorial(n-1);
    console.log("Adding factorial result to cache");
    cache[n] = result;
    return result;
  }
}


console.log(
   factorial(4)
)