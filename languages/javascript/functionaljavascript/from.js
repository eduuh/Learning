const _ = {};

_.from = function(pseudoarr) {
    var newArr = [];
    for(var key in pseudoarr){
       newArr.push(pseudoarr[key]);
    }
    return newArr;
}

_.from2 = function(pseudoarr) {
   return Array.prototype.slice.call(arguments);
}


const printName = function() {
 console.log(arguments);
 var arr = _.from(arguments);
var newarry = arr.join(' ');
 return newarry;
 // "hello am edwin"
};

console.log(printName(['hello', 'am', "edwin"]));

