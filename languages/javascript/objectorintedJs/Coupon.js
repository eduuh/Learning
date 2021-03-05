class Coupon {
  constructor(price, expration) {
    this.price = price || 45;
    this.expration = expration || "2 days"
  }
  getPrice() { return this.price}
  getExpiration(){ return this.expration}
}
// at this point you have created a class that inherits methods and properties. 
// You have called the parent constructor
// the last step is to creat your own coupon class
class FlashCoupon extends Coupon {
  constructor(price, expration){
    super(price)
    this.expration = expration  || "2 hours"
  }
  get ExpirationMessage() {
    return `This offer expires in ${this.expration}`
  }

  isRewardsEligible(user) {
    return user.rewardEligible && user.active
  }

// getter has no parameters
  getRewards(user) {
    if(this.isRewardsEligible(user)) {
       this.price = this.price * 0.9
    }
  }
}

const coupon = new FlashCoupon(54);
let expiration = coupon.getExpiration()
let price = coupon.getPrice()
console.log(price, expiration)

// Note that any method you add to your parent class is inherited by a child class.
// This can be a huge benefit, but it is also easy to create bloat in children when you add method to your parent class.
// getters and setters

