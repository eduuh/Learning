function joinElements(col, joinString){

    function recurse(index, resultsofar){
    resultsofar += col[index];
    if(index === col.length-1){
        return resultsofar;
    }else{
    return recurse(index+1,resultsofar + joinString)
    }
    }
    return recurse(0,'')
}

console.log(
joinElements(['eddi',"\'s s", 'cr', 't Js cod','-snipp',"t -> 🔥" ], 'e')
)
