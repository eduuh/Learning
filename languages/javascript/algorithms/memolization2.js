const memoizedClosureTimesM = (m) => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    } else {
      console.log('Calculating results');
      let result = n * m;
      cache[n] = result;
      return result;
    }
  };
};

const memoClosureTimes10 = memoizedClosureTimesM(10);
const memoClosureTimes5 = memoizedClosureTimesM(5);
