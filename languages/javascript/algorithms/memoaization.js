const times10 = (n) => n * 10;
console.log('============Task 1:  ============');
console.log('times10 returns: ', times10(9));

// global cache
const cache = {};

const memoTimes10 = (n) => {
  // Improtant for function with higher time complexities
  if (n in cache) {
    console.log("Fetching  from cache");
    return cache[n];
  } else {
    console.log('Calculating result');
    let result = times10(n);
    cache[n] = result;
    return result;
  }
};

console.log('Tast 1 values:', memoTimes10(9));
console.log('Tast 2 values:', memoTimes10(9));
console.log('cache object: ', cache);
