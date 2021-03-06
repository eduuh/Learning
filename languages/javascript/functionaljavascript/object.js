var person = {};

const edwin = "edwin";

person.name = "Mrs. White";
person.age = 33;

// storing value by reference
var who = person.name;

// reassignmements
person.name = "Mr. White";

console.log(person);
console.log(who);

// everything that uses a dot operator is an object.
// Primitive value: A primitive value is a number, boolean ,
// This make a copy to value each time.
// You should not mutate you data objects. you should copy and return the copy.
// Mutation: updating and changing.

// Non Primitive values : functions, promises
// Usually passed by reference. You are either passing a pointer around to it.
// Does not make a copy.

console.log(who.story);

// An array is an object.
var person3 = [];
person3.name = "Mrs. White";
var who = person.name;
console.log(who);

// array is an object
console.log(typeof person3 === "array"); // false
console.log(typeof person3 === "object"); // true

// Brackets
var person3 = [];
person3[0] = " I was not in the billiards room";
console.log(person3);

// some rules.
// Arrays are objects.
// Using dot notation coarses to a string while using brackets does not.
// properties can be declared using dot notation , or blackets in quoates.
// Bracket notation without quotes check for variables in thes scope, if none throws an error.
// array.0 would not work. this would be anusual to the javascript syntax. The way around this is to use blacket notation with quotes around the unsuall character.

// using non-valid characters.
var box = {};
box["material"] = "cardboards";
box["*^"] = "testing invalid characters";
// { material: 'cardboards', '*^': 'testing invalid characters' }
box["*^"];
//'testing invalid characters'
