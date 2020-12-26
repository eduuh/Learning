const _ = require("underscore");

const weapons = ['candlestick', 'lead pipe', 'revolver'];
const makeBroken = function(item) {
  return `Broken ${item}`
}

var _ = {}

_.each= function(list, callback){
   // make sure it work object or array
   if(Array.isArray(list)){
   for(var i = 0; i< list.length; i++){
      // call the callback with a list item
      callback(list[i], i, list);
   }

   } else { // object
      // loop through objects
         // call the callback with a list item
         for(var key in list){
            callback(list[key], key, list);
         }
   }
   //celebrate
};

_.map = function(list, callback){
  if(Array.isArray(list)){
    var newList = [];
    for (let i = 0; i < list.length; i++) {
       newList.push(callback(list[i]))
    }
    return newList;
  }else{
      var newObj = {};
     for(var key in list){
        newList[key] = callback(list[i])
     }
    return newObj;
  }
}

//using _.each 
_.map2 = function(list, callback){
  if(Array.isArray(list)){
    var storage = [];
    _.each(list, function(element, i, list){
         storage.push(callback(v, i,list));
    })
  }
}


 function CreateSuspectObj(name) {
    return {
      name: name,
      color: name.split(' ')[1],
      speak(){
        console.log("My name is", name);
      }
    }
 }

var suspects = ['Miss scarlet', 'Colonel Mustard', 'Mr. white'];

var brokenWeapons = _.map(weapons, makeBroken);

var suspectList = _.map(suspects, function(name){
   return CreateSuspectObj(name);
})

console.log(brokenWeapons);
console.log(suspectList);

