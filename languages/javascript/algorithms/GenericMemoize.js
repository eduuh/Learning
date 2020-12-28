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

const memoizeTime10 = memoize((n) => n * 10);
const memizePlus10 = memoize((n) => n + 10)

console.log("9 time 10 equals", memoizeTime10(9))
console.log("9 plus 10 equals", memizePlus10(9))


console.log("9 time 10 equals", memoizeTime10(9))
console.log("9 plus 10 equals", memizePlus10(9))

