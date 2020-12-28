var tracker = 0;

const loopNTimes = n => {
  if (n <= 2 ){
    return "complete"
  }
   return loopNTimes(n-1);
}

loopNTimes(3)