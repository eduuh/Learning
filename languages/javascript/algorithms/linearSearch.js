function LinearSearch(list, item){
  let index = -1;
  list.forEach((listitem,i)=> {
    if(listitem === item){
        index = i
    }
  });
  return index;
}

LinearSearch([3,6,7,8,9], 8)
