//type annotations
//let apples: number = 5;
let apples = 5;

// let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// build in objects
let now: Date = new Date();

//Array
let colors: string[] = ["red", "green", "blue"];
let myNumber: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//classes
class Car {}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// 1) Functions that returns the 'any' type
const json = '{"X": 10,  "y": 29}';

//JSON type means TS has no idea wat this is
//- Cant check for correct property references
// Avoid variable with 'any' at all cost

const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) Wen we declare a varaiable on one Line
// and initalizate it later
let words = ["red", "green", "blue"];
let foundWord;
for (let i = 0; i < foundWord.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variables whose type cannot be infered correctly
let number = [-10, -1, 12];
let numberAbovezero: boolean | number = false;
for (let i = 0; i < number.length; i++) {
  if (number[i] > 0) {
    numberAbovezero = number[i];
  }
}
