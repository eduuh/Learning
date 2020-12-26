const game = {
   'suspects': [
     { 
        name: "Rusty",
        color: "orange"
     },
     { 
        name: "Edwin Muraya",
        color: "red"
     }
   ]
}

game["suspects"] // return the array with the suspects.

function intelate(){
 console.log("The first iterate");
 for(let i=0; i < game.suspects.length; i++){
   console.log(game.suspects[i]);
 }
}

intelate();

function foo(){
// used with objects
   for(let suspect in game.suspects){
    if(game.suspects[suspect].color === 'red'){
       game.suspects[suspect]["guilty"] = true;
    }
     console.log(game.suspects[suspect]);
}
}

foo(game)

var gameLoop = function(){
  for(var i =0; i < game.suspects.length; i++) {
    console.log("outer loop");
    for(var key in game.suspects[i]){
      if(game.suspects[i][key]=== "Rusty"){
         console.log("found one");
      }else{
        console.log('next time!');
      }
    }
  }
}

// outer loop
// inter loop
// inter loop
// found one
// Outer loop
// inner loop
// next time!


gameLoop()

// to the task with destructuring
const firstColor2 =game.suspects[0].color
const secondColor5 =game.suspects[0].color

/// detructuring

var [color1, color2] = [game.suspects[0].color,game.suspects[1].color]

var [{color: firstColor }, {color: secondColor}] = game.suspects;
console.log(firstColor, secondColor);

