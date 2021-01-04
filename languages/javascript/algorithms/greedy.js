const makeChange = (coins, amount) => {
  coins.sort((a,b)=> b-a);
  let cointTotal = 0;
  let i = 0;

  while(amount > 0){
    if(coins[i] <= amount){
      amount -= coins[i];
      cointTotal++;
    }else{
      i++;
    }
  }
  return cointTotal;
}


console.log(
makeChange([5,10,25], 50)
)
