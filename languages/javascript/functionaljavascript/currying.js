const curry = (fn) => {
  return (arg) => {
     return (arg2)=> {
       return fn(arg, arg2);
     }
  }
}

var curried = curry((a,b)=> {return a+b});

console.log( 
curried(1)(2)
 )

// composing
const compose  = function(fn, fn2) {
  return (arg) => {
     const result = fn2(arg)
     return fn(result)
  }
}

const consider = name => {
  return `I think it could be .... ${name}`
  
}

const exclaim = statement => {
  return  statement.toUpperCase();
}