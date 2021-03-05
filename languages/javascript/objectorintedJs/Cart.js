const LoggerInUser = "statrtrstt"
const rate = 0.14;

class Cart {
   constructor(options){
      this.user = options.user
   }

calcTax (rate) { 
  this.tax = this.total * rate
  return this;
};

logCart(){
    console.log(this)
}

calcShipping() {
   if(this.total > 40) {
      this.shipping = 5
   }else {
     this.shipping = 10
   }
   return this;
}

calcGrandTotal() {
   if(this.tax  && this.shipping) {
     this.grandTotal = this.total + this.tax + this.shipping
   }
   return this
}
}

const currentCart = new Cart({ user: LoggerInUser});
currentCart.total = 45;
//currentCart.calcTax(rate);
currentCart
  .calcTax(rate)
  .calcShipping()
  .calcGrandTotal()

// console.log(currentCart.logCart.call(currentCart))

window.addEventListener("load", currentCart.logCart.call(currentCart));
