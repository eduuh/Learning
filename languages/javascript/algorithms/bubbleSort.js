
const bubblesort = function (list){
 let sortedlist=[];
   let maxIndex = list.length - 1;
  for (let i = 0; i < list.length; i++) {

    let maxvalue;
    for(let l=0; l < list.length; l++ ){
      if(!maxvalue){
        maxvalue = (list[l] <= list[l+1])? list[l+1]: list[l];
      }else{
        maxvalue = (maxvalue <= list[l+1])? list[l+1]: maxvalue;
      }

   sortedlist[list.length-1-l] = maxvalue;
  }

 return sortedlist;
}
}


console.log(
bubblesort([5,7,8,9,10,13])
)
