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

var miss = CreateSuspectObj(suspects[0]);
console.log(miss.speak());

 var suspectList = [];

 for(var i = 0; i< suspects.length; i++){
 // hydrating
   suspectList.push(CreateSuspectObj(suspects[i]));
 }

 console.log(suspectList);