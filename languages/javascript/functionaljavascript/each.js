const _ = require("underscore");
const _ = {};
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

_.each(['sally', 'georgie', 'Porgie'], function(name, i, list){
     if(list[i + 1]){
     console.log(name, 'is younger than', )
     }else {
       console.log(name, 'is the oldest');
     }
});

