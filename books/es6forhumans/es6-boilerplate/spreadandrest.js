var showCollection = function(id, ...collection) {
   console.log(collection instanceof Array);
}

showCollection(45, "movie", "music"); // ["movies","music"]

let values = [200,500,400];
let newSet = [400, ...values, 600];
console.log(newSet); //[ 400, 200, 500, 400, 600 ]

let number = [-45, 45,64,84,64];
console.log(Math.max(...number,804));

const price = 4.5, quantity = 6
const invoiceData = {
    price, quantity,
   calculateTotal(){
      return price * quantity;
   }
}

console.log(invoiceData.calculateTotal())


