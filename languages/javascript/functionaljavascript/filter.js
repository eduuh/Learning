const _ = {}

_.filter = function(arr, cb){
   // create a new array
   const storage = [];
   //loop through arr
   for(let i = 0; i < arr.length; i++){
      // check if the cb returns true
      if(cb(arr[i], i, arr) == true) {
      // if returns true, push into array
         storage.push(arr[i]);
      }
   }
   // return arr
   return storage;
}

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

_.filterEach = function(arr, cb){
   // create a new array
   const storage = [];
   //loop through arr
    _.each(arr, function(item, i, list){
        if(cb(item, i, list) === true){
         storage.push(arr[i]);
    }});
   // return arr
   return storage;
}




const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];


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

var peoplePresent = _.filterEach(videoData, function(suspectObject, i, list){
   return suspectObject['present'];
});

const suspectsName = _.map(peoplePresent, suspect => {
  return suspect.name;
});

console.log(suspectsName);
