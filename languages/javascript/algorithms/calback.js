const times10 = (n) => n * 10;

const memoize = (cb) => {};

const memoizeTimes10 = memoize(times10);

console.log('Task 4');
try {
  console.log('Task 4 calculated value', memoizeTimes10(9)); // calculated
  console.log('Task 4 calculated value', memoizeTimes10(9)); //cached
} catch (e) {
  /* handee error */
  console.log('Task 4:', e);
}
