var fn = data => data;

let getNumber = () => 42;
console.log(getNumber);
// wrap the parameters inside brackets for zero or more than two parameters
var getPrice = (quantity, tax) => (quantity*5) * (1+tax);

// use curly brackets when you want to enclose the stuff in multiple braces.
var getPrice = (quantity, tax) => {
    let price = quantity * 5
    price *= (1+tax)
    return price;
}

console.log(getPrice(2,.095));

// to return an object literal outside the body, you must wrap the literal in paraentheses.

var getNumber = data => ({data: "check", number: 45});

//equivalent with

var getNumber = function(data) {
 return {
   data: "check",
   number: 45
 };
};

/// Using arrow functions to create IIfEs

var fn = function(num){
 return {
  getNumber: function()
    {
      return number;
    }
 };
}(46);


var fn0 = ((number) => {
     return {
         getNumber: function() {return number}
     };
})(46);

console.log(fn0.getNumber());
