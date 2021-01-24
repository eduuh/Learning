const field = 'dynamicRandom'
const price = 4.66
const quantity = 6
const invoiceData = {
  [field]: price,
  quantity,
  calculateTotal(){
      return this.price * this.quantity;
  }
}

console.log(invoiceData)
//}
  //dynamicRandom: 4.66,
  //quantity: 6,
  //calculateTotal: [Function: calculateTotal]
//}
