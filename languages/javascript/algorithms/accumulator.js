function joinElements(array, joinString){
  //0, ''
  function recurse(index, resultSofar){
    resultSofar += array[index];
    if(index === array.length-1) {
      resultSofar += " but confusing"
      return resultSofar;
    }else{
      return recurse(index+1, resultSofar + joinString);
    }
  }
  return recurse(0, '');
}

console.log(
joinElements(['eddi',"\'s s", 'cr', 't Js cod','-snipp',"t -> 🔥" ], 'e')
)