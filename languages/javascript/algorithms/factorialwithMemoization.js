const memoize = (cb) => {
 let cache = {};
 return (...args) => {
  let n = args[0];
  if(n in cache){
    console.log("Fetching from Cache")
    return cache[n]
  } else{
    console.log('Calulate result');
    let result = cb(...args);
    cache[n] = result;
    return result;
  }
 }
}

const factorialCalcu = n => {
  if(n === 1){ return 1} else{
    var result = n * factorialCalcu(n-1);
    return result;
  }
}

const factorial = memoize(factorialCalcu);

console.log(
  factorial(4)
)

console.log(
  factorial(4)
)