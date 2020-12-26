var u =require("underscore");

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

var suspectList = []

// this dont work hear
// _.each(suspects, function(name) {
//    let suspectobj = CreateSuspectObj(name);
//    suspectList.push(suspectobj);
// });

u.each(suspects, function(name){
   let suspectobj = CreateSuspectObj(name);
   suspectList.push(suspectobj);
})
// suspects.forEach(name => {
//    let suspectobj = CreateSuspectObj(name);
//    suspectList.push(suspectobj);
// });


console.log(suspectList);


