const ifElse = (condition, isTrue, isFalse)=> {
  return condition ? isTrue : isFalse;
}

ifElse(true, 
()=> { console.log(true) },
()=> {console.log(false)}
)

var increment = function(n) {return n+1}
var square = function(n){return n*n}

var domathSoIdontDoIt= function(n , funct){return funct(n)}

console.log(domathSoIdontDoIt(3, increment));
console.log(domathSoIdontDoIt(4, square));

// Es6 translation.
const increment2 = (n) =>{ return n + 1 };
const square2 = n => {return n * n };
const domathSoIdontDoIt2 = (n, func)=> {return func(n)};

// Passing Arguments
// How do we pass arguments

const ifElse2 = (condition, isTrue, isFalse, p)=> {
  return condition ? isTrue(p) : isFalse(p);
}

ifElse(true, fn1, fn2, "Hi");

// funciton with rest operator

const ifElse2 = (condition, isTrue, isFalse, ...args)=> {
  console.log(args) // ['Hi', 'Bye', 'Hola']
  return condition ? isTrue(...args) : isFalse(...args);
}

ifElse(true, fn1, fn2, "Hi","Bye","HOLA");

/// Before esg
const ifElse2 = function(condition, isTrue, isFalse ){
  const args = [].slice.call(arguments, 3);
  console.log(args) // ['Hi', 'Bye', 'Hola']
  return condition ? isTrue(...args) : isFalse(...args);
}

ifElse(true, fn1, fn2, "Hi","Bye","HOLA");
