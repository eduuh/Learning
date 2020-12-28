console.log('============Removing the Global Cache and using Closures ============');

// To improve the time complexitiy we have a trade off with **space complexities**
const memerizedClosureTimesM = (m) => {
// local cache
const cache = {};
 return (n) => {
  // Improtant for function with higher time complexities
  if (n in cache) {
    console.log("Fetching  from cache");
    return cache[n];
  } else {
    console.log('Calculating result');
    let result = n * m;
    cache[n] = result;
    return result;
  }
};
}

const memoClosureTimes10 = memerizedClosureTimesM(10);
const memoClosureTimes5 = memerizedClosureTimesM(5);


console.log( 
memoClosureTimes10(7)
 )


console.log( 
memoClosureTimes10(7)
 )