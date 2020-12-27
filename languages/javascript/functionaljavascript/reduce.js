// takes a collection and a cb
// reduce returns one function
// loops the collection calling the cb
// The function is called with the previous value and current value


const _ = {}

_.reduce = function(collection, callback, initial ){
    let memo = initial; //10
   for (let i = 0; i < collection.length; i++){ // i = 2
       if( i === 0 && memo == undefined) { 
       memo = list[0] 
       i++ 
       }else {
         memo = callback(list[i], memo) //5 ,5
       }
   }      
   return memo;
}


const sum = function(a ,b) {return a+b}

_.reduce([2,3,5], sum)

