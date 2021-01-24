let arr = [] 

for (const i = 0; i < 3; i++) { //0 < 1
    arr.push(function(){
        return i;
    });
}

let value = arr[0](); // 0
console.log(value);   // 0

function fn(params) {
  {
      let params;
  }
}

if (this === window) {
   console.log("this refers to the globla context");
}


