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
     console.log(game.suspects[suspect]);
}
}

foo(game)