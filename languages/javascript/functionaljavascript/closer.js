const newClue = name => {
 const length = name.length;

 return(weapon) => {
   let clue = length + weapon.length;
   return !!(clue % 1 );
  }
}

const makeTimer = () => {
 let elapsed = 0;
 const stopwatch = () => {return elapsed};
 const increase = () => elapsed++;
 setInterval(increase, 1000)
 return stopwatch;
}

let timer = makeTimer();
setTimeout(
()=> { console.log(timer()) }, 567)
