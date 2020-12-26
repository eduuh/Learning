## What is functional programming?.

Its about verbs. What it do. Its a style.

```javascript 
var game = {};

game.murderer = '??';
game['weapons'] = [
{ type: 'laser', location: 'lab' },
{ type: 'angry cats' },
'dish soap',
];

game.name = [];
game.name[0] = 'miss Scarlet';
// we cannot push things to an objects, but we can do push to an array.
game.name.push('Mr. Green');
```

## es6 destructuring

what is destructuring?
why does const work on variables but it let objects assignments.

1. Let
2. const
3. var

### List Transformation

#### Nested Data Structures

A javascript class is a fuction that returns an object.

Hydrating is taking data and forming objects out of the data.

#### Looping with _.each

_.each() method does not exist.

Take two things, the list and the.

### Underscore.js, Lodash

underscore.js is a utility-belt library for javascript that provide support for the usaul functianal suspects(each, map, reduce, filter) without extending any core javascript Objects.

### _.each()



### _.map()

- Produces a new array of values by mapping each value in **list** through a trasformation function(iterator).
- Each invocation of **iterator** is called with three arguments(element, index, list). If **list** is a javascript object.

#### _.filter()
We are going to want to filter by those who are present, but first we need to write our filter function.

```js
_.filter(arr, callback) {

}
```

The callback returns either **true or false**.

#### Functions

- Don't mutate data.
- Learning how to read documetations.

Anonomous function.
Ability to identify the following.

1. Function definition.
2. Function Name.
3. Function body.
   - They dont get run until the function is invocked
4. Function Invocation / Call-Time
5. Arguments / Parameters
    - Arguments contains a value
    - parameter are variables
6. Return / side Effects

Functional programming is to minimize **side effects**.

### Arrow functions

```js
var nameImprover = (name, adj) => {
  return `Col ${name} Mc ${adj} pants`;
}
```

1. Lacks the keyword Function.
2. Containes the =>.
3. Does not have their own this keyword.
4. The arrow function does not have the **args**.

#### spread operator

#### Arguments Keywords

```js
const createTuple = (a, b, c, d) => {
  console.log(arguments); // could not work as expected
  return [[a,c], [b,d]];
}

const createTuples = function(a, b, c,...d) {
  console.log(arguments); // could not work as expected
  // ['it', 'be', 'could', 'anyone', 'no one']
  return [[a,c], [b,d]];
}
createTuple('It', 'be', 'could', 'anyone', 'no one');
createTuple2('It', 'be', 'could', 'anyone', 'no one');

```

### Default Parameters

```bash
const add = function(a, b=2) {
 console.log(arguments); //logs [3]
 return 3;
}
// es5 version

const add = function(a, b) {
 b = b || 2;
 console.log(arguments); //logs [3]
 return a + b;
}

add(3)
```

pseudo array

#### Array-like Object

```js
// option one
const contructArr = fuction() {
  // arguments is a pseudoarray 
  // turns arguments into an array
  const arr = Array.prototype.slice.call(arguments);
  // ['was','it','in]
  arr.push('the billiards room?');
  // ['was','it','in, 'the billiards room?']
  return arr.join(' ');
  // "was it in the billiards room?
};

constructArr('was', 'it', 'in');
/// option two
const contructArr2 = function(){
  const arr = Array.from(arguments);
  arr.push('the billards room?');
  return arr.join('');
}
constructArr('was', 'it', 'in');
```

Functions are also Objects.

### Scope

The are where a function has access to some value.

1. Global variable.
   - Attached to the window object.
   - Variables without a **decolation like var, let , const**
2. Function Scope.
   - Variable inside a function have access to the values in the funciton or the parent function.
3. Block scope.
    - block scope can be created with let.



