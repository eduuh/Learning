/// Time complexities -> 2n
const minMax = function (list){
 let minmax = {};
  list.forEach((item, i)=>{
    if(!minmax.min && !minmax.max){
       minmax.min = item
       minmax.max = item;
    }
    minmax.min = (minmax.min >= item)? item : minmax.min;
    minmax.max = (minmax.max >= item)? minmax.max : item;
  });
  return minmax;
}

/// Time complexities -> n^2
const minMax2 = function(list){
 let minmax = {};
  let min;
  let max
  for(let i=0;i< list.length; i++){
    if(min && max){
       min = (min >= list[i+1])? list[i+1]: min;
       max = (max <= list[i]) ? list[i]: max;
    }else{
     min = (list[i] <= list[i+1]) ? list[i]: list[i+1];
     max = (list[i] < list[i+i]) ? list[1+i] : list[i];
    }
  }
  minmax.min = min;
  minmax.max= max;
 return minmax;
}

var price = [100, 200, 300, 400, 899];
var price2 = [899, 200, 300, 400, 777];

console.log(
  minMax(price)
)

console.log(
  minMax2(price2)
)


//for(let i = 0; i < list.length; i++){
  //if(min){
    //min = (min >= list[i+1])? list[i+1]: min;
  //} else {
    //min = (list[i] <= list[i+1]) ? list[i]: list[i+1];
 //}
//}
  //let max;

//for(let i = 0; i < list.length; i++){
  //if(max){
    //max = (max <= list[i]) ? list[i]: max;
  //}else{
    //max = (list[i] < list[i+i]) ? list[1+i] : list[i];
  //}
//}
