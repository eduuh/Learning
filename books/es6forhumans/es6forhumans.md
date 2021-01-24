
The latest Standard of Javascript: 

The evolution of javascript, more specifically ECMAScript, is primarily community driven and TC39 is
the official name of the committee in charge of it.


The members of the committee represent varous stakeholders like the major browser companies adn other
invited members. They meed and communicate on a reqular basis and are tasked with maintaining and
upgrading the standard for the ECMAScript programming language and the libraries that extend its
capabilities.

The notes and Agendas of the meetings are usually maintained in the github repository.

https://github.com/tc39/tc39-notes

The design process for ECMAscript standards is build around proposals that are usually popular requests
from the developer. Since the TC39 has a large number of participants, makind it difficult to do
collaborative design work, usuall one or two committee members are assigned as champions responsible
form maintaining a proposal and to do design work and report back to the committee.



From a proposal to become a standard , it has to go through multiple stages. The initial feature sketch
of the proposal, which is alse refered to as **strawman proposal** is the first stage discussed by the
commiteed and if it agree that is is important, it is considered an official proposal. 

The proposed feature then needs to implemendet at least by two major javascript engines to get feedback
from the community and evolve the proposal further. Once the proposal passes through these stages and
incoporates feedback, TC39 approves it and will include it in the new edition  of the ECMAScript
standard.

Histroy of ECMA, ECMAScript and Javascript.

Javascipt was originaly developed by brendan Eich as a scripting language for the web for use in
Netscape browser. The name itself was choosen for marketing reasons due to the rising popularity fo
Java around the time, even though it had nothing to with Java.

In attenmpt to standardize the languate and the specification, it was submitted to ECMA International,
a body for standardization of information and communication technology and consumer electronics.

The language standardized in ECMA262 was called ECMAScrip or ES in abbreviated form. But still people
called it Javascript.

The initial versions ES1 and ES2 wer released in 1997 and 1998, but in 1999, the ES3 release was a
major upgrade with new features like reqular expression, improve string handling, more control
statements, better error handling, and try catch exception handling. 

After the release fo ES3, work on ES4 was well under way with many radical changes and massive scope.

   1. Updated feature included new syntxx.
   2. Modules.
   3. Classes
   4. Classical Inheritance.
   5. Private object members.
   6. Optimal type annotation.

The proposed changes let to many differences, both technical and political, among various stakeholders
in the community, resulting it being put on hold in 2003. Parts of the proposed features made their way
into implemetations like ActionScript and Jscript.Net.

After receiving feedback from these implementation, TC39 decided to resume work on ES4 in 2005, but by
this time there was a big split in the community and tow major groups had formed with differences on
the way forward.

The alternae version championed by campanies like Microsoft and Yahoo with feature additions and
improvements to the existin spec was referred to as ECMAScript3.1. 

Because there was no consensus between the groups the future of Javascript was questionable, ther was
no major progress for a few years. Finally, in 2008 TC39 can to a consensus betweent ES4 and ES3.1.

To avoid confusing to the community ES4 was never released. ES5 was released in December 2009, and it
is currently the most widely supported version in modern browsers today. It came with many enhancement
to the standard library and updated lanuguage sematics via a **strict mode**.

It becamu apparend the ES Harmony ware becoming too amibitous for a single release, they split up the
first set of features with the highest priority and code named the release ES.

Next, to avoid premature naming with a version number in light of what happend with ES4, once it
matured the specification was called ECMAScript6.

ES6 took a long time to become official. The deadline for ES6 propasal was May 2011 and no major
porposals were considered after that. but starting with later versions TC39 decided to time-box release
and release a new version every year with small incremental changes using whatever features are
approved by that time. 

Hence the official name of ES6 was changed to ECMAScript 2015, but the name ES6 was so widely used for
years that ES2015 is sill commonly refered to as ES6 and that's why

Now ES6 are still commonny referred to as ES6 and thas's why we chose to refer to the new specification
as ES6 thoughout.

But going forwardd, ES version will be offically refered to by their year of release. So when we say
ES5, we are referring3 to the broader changes in ES2015 is still commonly referrded to as ES6 and
that's why we chose to refer to the new specification as ES6 throughout this book.



## Es6 

The specification drafts are divided into four major parts.
  1. the goals
  2. The requirements
  3. The means.
  4. The Theme.
  
Many Javascript environments including web browser and Node.js are actively working on imlpementing all
the feature if ECMAScript 6 and later. Until all of ES6 and later. It will take sometime before all
browser fully support the latest version of Ecmascript.

Untill all of ES6 features are universally supported we neew a way to converting ES6 into compatible
javascirpt code. This is where transpilling comes in. Transpilling (trasformation+compiling) is teching
in which use use special tools to transform ES.

Some ES6 features can work simply by using **polyfills** and **shims**, which are simple patterns that define a new
behaviour in an older environment. You can also run and transpile small piece of ES6 code online in your browser
through ES6 REPLs like **jsfiddle** and **babeljs**. 

But for larger project, you would need to use any of the available transpilers. We recommend using Babel, which is one
of the most popular Javascript transpilers available tody.

## setting up ES6 Using Babel and Webpack.

In order to use ES6 in your projects today, there are a sete of build tools you will need to get thing up and running. 

### Transpiling with Babel.

Babel.js is an awesome tool that lets you transpile your ES6 code into ES5 code that can then be run in current
Javascript envrionments. Babel support the latest version of Javascript through syntax transformers, and these plug-in
allow you to use new syntax without waiting for browser support.

Ensure  node and npm are installed

**npm install -g babel-cli**

Now , you can manually transpile to code with the command Line using. 

**babel-node filename.js**

but transpilling every file manually isn't efficient and , in most cases, isn't the solution for managing large
projects. so lets set up es6 started kit that will help you automate the build process and make the development
process more effient.

### setting up an ES6 Boilerplate


### start a New project.

Run the following set of commands in your terminal to start a new project.

```
mkdir es6-boilerplate
cd es6-boilerplate
npm init –yes
```
npm init creates a new project with its own package.json and –yes flag prevents npm from promting you from any option and will use the
defaults.

## Install webpack and webpack-dev-server

Webpack is a very flexible module bundler that takes moduls with dependecies and genertes static assets representing those modules.

```bash
npm install --save-dev webpack webpack-dev-server
```

### Install babel in the project

You can install babel into your project very easily using the following npm packages.

```bash
npm install --save-dev babel-loader babel-core babel-preset-es2015
```
The next step is to configure babel to use ES2015 presets by adding a new file 

create a new index.html file nad index.js file in the root directory of your project.

## configuring webpack

the next set is to sep up webpack by creating a configuration file -
webpack.config.js in the root directory of your project.

A webpack configuration file is a commonjs-style module where a
configuration object is exported out of thi module

```javascript
module.exports = {
    entry: './index.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    }
}
```
webpack will analyze all the dependecies and generate a buedled
output which inclued all the dependecy modules.

##Add Loaders

Loaders allow you to preprocess files as you load them. Loaders
provides a powerful way to handle front-end build steps and can
transform files from a different language like, coffescript to
Javascript.

fox examles, babel-loaders uses Babel to load ES2015 files.

```javascript
module.exports = {
    entry: './index.js',
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
  module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }]
  }
}
```



The above configuration implies the following:
 
1. ‘./index.js’ is the entry point of the application.
 
2. Output will be generated in ‘./dist/bundle.js’.
 
3. We are processing every .js using the babel-loader, excluding 
node_modules to avoid external libraries to go through Babel, 
slowing down compilation.

Add the following code to your html file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>ES6 Boilearplate</h1>
  <p>Check Console for detailes</p>
  <div id="main">
    Hello edwin
  </div>
  <script src="dist/bundle.js"></script>
</body>
</html>
```

To compile your .js file, you can run the following command in your terminal:
webpack
You can also use following additional flags with webpack:
• 
webpack for building once for development.
• 
webpack -p for building once for production (minification).


wwebpack -w for continuous incremental build in development 
(fast!).
• 
webpack -d to include source maps.

## setting up a development server

To start a development server to test your code, you can run the
wollowing command.


```
wepack-dev-server -d --progress --colors
```
This binds a small node-express server on localhost:8080, which
servers your static asserts as well as the bundle (compliled
automatically). It automatically update the browser page when a
bundle is recompiled.

const is used to declare an immutable variable but it does not make
the value contained in the variable immutable.

In the following code snippet obj is a contant but the value it point
to is mutable therefore you can add a property to it but you cannot
assing a different value to obj.





```javascript
const obj = {};
obj.key = 42;
console.log(obj.key); // 42
obj = {}; // TypeError
If you wanted to you could make the value itself immutable by freezing it.
const obj = Object.freeze({});
obj.key = 42;
console.log(obj);   // {}
```
## variable Declarations in loops.

For loops (for, for-in, for-of) let you declare variables in their heads. But the way 
you declare these variables using var, let, or const changes things. Let’s look at each of 


```js
let arr = [] // lenght = 0

for (var i = 0; i < 3; i++) { //0 < 1
    arr.push(function(){
        return i;
    });
}

let value = arr[0](); // 3
console.log(value);   // 3
```
The output in 3 because a closure gets formed over the variable i at
the end of the loop. I is set to 3 and each instance of i in the body
refers to the same bindings. Therefor, the function always returns 3.
Now let's take a look at the case where i is declared using let.

Using let in loops.

```js
let arr = [] // lenght = 0

for (let i = 0; i < 3; i++) { //0 < 1
    arr.push(function(){
        return i;
    });
}

let value = arr[0](); // 0
console.log(value);   // 0
```

When we use let in a **for-loop**, each iteration of the loop will
get its own i variable and any closure created close over their own
values of i.

In the case of const, it works similar to var because the initial
assigned value to a **const variable** will not change again.


```js
let arr = [] 

for (const i = 0; i < 3; i++) { //0 < 1
    arr.push(function(){
        return i;
    });
}

let value = arr[0](); // 0
console.log(value);   // 0
```
TypeError: Assingment to constant variable.

#### Recomendation always use let in loops.

### Variable Declarations with function Parameters and Global Scope.

```js
function fn(params) {
  let params;  // SyntaxError: Identifiers 'params' has already been declared
}
```
Doing the same with var does nothing, because it just equivalet to
re-declaring a variable. Another way of fixing the issue would be
using a let inside a block, but the new varible declared will only
shadow the parameter.

The global object in Javascript (window in browsers and global in
Node.js) has always been confusing. That's why in ES6 a distinction
was introudeced. Considering the following example:

All properties of the global object are global variables. Therefore, in the global scope var declaration and function declaration create such properties. But global variables created using **let** and **const** declaration willnot be properties of the gloabal object.

/// Using arrow functions to create IIFEs

Functions in Javascript can be used to create Immediately invoked function expressios IIFEs. You could define an anonymous function and call it without having any reference it. This is an effective pattern to shield the expression from the rest of the program.

Arrow functions are functions expressions and are not function declarations. They are anonymous function expressions that have no named reference for the purpose of recursion or event binding or unbindings.

Arrow functions do save us a few lines of codes and characters, but the real purpose of arrow functions is to handle the this keyworrd within functions. this behave differenterly inside an arrow function. 

## this keyword

If you're in strict mode (use strict), this would be undefined.

1. Function Invocation
2. Method Invocation.

```js
let myobj = {
    name: 'fancy',
    operation: function() {
      console.log(this);
    }
}

console.log(myobj.operation())

let x = myobj.operation;
x()
```
TODO: check the differece between function invocation and method
invocation.

If we wee to call x with the [myobj object] for method invocation we
will have to use .call() method.

```javascript
x.call(myobj);
```
3. Constructor Invocation

```
function Employee(name,departure, salary) {
   this.name = name;
   this.departure = departure;
   this.salary = salary;
  console.log(
     "Welcome" + this.name + "!"
  )
  console.log(this);
}

let edwin = new Employee('john', 'sale', 20000);
```

### this in Arrow functions

Let't take a look at how this work inside an Arrow function. Arrow
function are designed to lexically bind the context, which mean that this
refers to the encolosing context where the arrow function is defined.

```js
function Employee(name,departure, salary) {
   this.name = name;
   this.departure = departure;
   this.salary = salary;
  console.log(
     "Welcome " + this.name + "!"
  )

  this.getInfo = function() {
     return function() {
       console.log(this.name + this.departure);
     };
  }
}

let edwin = new Employee('Edwin', 'sale', 20000);

let printInfo = edwin.getInfo();
printInfo();
```
Here, printInfo refers to the inner function and since we are simply
making a function invocation, this refer to the global object that does
not have any employ properties and hence produces undefined whenever a
property on this is used.

```js
function Employee(name,departure, salary) {
   this.name = name;
   this.departure = departure;
   this.salary = salary;
  console.log(
     "Welcome " + this.name + "!"
  )

  this.getInfo = function() {
     return function() {
       console.log(this.name + " from" + this.departure);
     };
  }
}

let edwin = new Employee('Edwin', 'sale', 20000);

let printInfo = edwin.getInfo();
printInfo();
```
Arrow functions does not change their context on invocation. Consider the
following example.

```js
function Employee() {
   this.firstName = 'Edwin',
    this.department = 'HR',
    this.salary = 45000,

    this.getContext = () => {
        console.log(this);
    }
}

let edwin = new Employee();
edwin.getContext();

let context = edwin.getContext;
context();
```
the context of the arrow function was set on declaration and it cannot be
changed. An important thing to note here is that you cannot "rebind" an
arrow function. The context is always fixed. 


```js
var details = {
    number: 45,
    operation: function() {
       return () => console.log(this.number) 
    }
}

var details2 = {
    number: 56
}

details.operation().bind(details2)();
```
We are setting the details2 number to 56 but we know we cannot bind a new
object to the arrow function. The engine does not throw any erro, it just
ignores the bind completely. So 45 is printed even if we call the
operation method  calls to **bind**, **call** or **apply** we nod be able
to change to value of this.

the value of this keyword cannot be changed and will remain constant but
you will still be able to use bind, call and apply on arrow functions.

Arrow function have lexical arguments. They don't have their own
arguments array but instead inherit from their parent. There are no this,
super, argument, and new.target bindings for arrow functions,so the value
of this super, arguments, and new.target insed a function is the nearest
containing non arrow function.

Another important aspect of Arrow functions is that they cannot be called
with new since they do not have the construct method and cannot be used
as constructors. The will produce an error whe used with new.

```js
var newFn = () => {
    
}

var obj = new newFn();
```
Normally when a function is declared in ES5, it has a prototype property
that is used in construction functions. But since you cannot use new on
an arrow function, there is no need for a prototype. 

### Using Arrow Functions

If you have functions that use the var self = this hack to deal with the
this issue, or .bind(this) call for proper this binding, arrow functions
were build to help out with this exact problem. 

```js

$$('.btn').on('click', function() {
        var self = this;
        setTimeout({
                $(self).toggleClass('btn-active');
        }, 1000);('.btn').on('click', function() {
        var self = this;
        setTimeout({
                $(self).toggleClass('btn-active');
        }, 1000);

```
Using arrow functions the above code becomes.


```js
$('.btn').on('click', function() {
        setTimeout(() => {
                $(this).toggleClass('btn-active');
        }, 1000);
});
```
With arrow function code become shorter and more concise syntax, arrow
function handle the this keywork a little differently, making it easier
to manage the code in many situatiations.

### Default Function Parameters.

default parameters help you accept fewer values as parameters and still
have the other parametrs assigned a value.

Functions in Javascript are unique in the aspect that they allow to call
them by appsing any number of parameters irrespective of the parameters
declared in the function definition. Thi gives the developer an
opportunity to use any value for the parameter in case no argument  is
specifiend

In ES5, if the argument is not specified, its value would be set to
undefined. The pattern commonly used to set default for unspecified
parameters was something like this

```js
function getSum(a,b) {
  a = (a !== undefined) ? a : 1;
  b = (b !== undefined) ? b : 45;
  console.log(a + b);
}

getSum()
getSum(1, 4)
getSum(4)
getSum(null, 5)
```
ES6 tries to streamline this process by giving us the ability to set a
default value to the parameter in the function declaration stement
itselef.

```js
function getSum(a = 4,b = 45) {
  console.log(a + b);
}

getSum()
getSum(1, 4)
getSum(4)
getSum(null, 5)
```
When we call the function, if we do not specify any argument, the default
values of the parametr gets used. The syntax to specify a default value
is the parameter followed by an equal sign  an expression after that.



```js
var getAnswer = function(number = 45, item = "universe") {
   console.log(number + " is the answer to " + item);
}

getAnswer(undefined, "life");
```

Here, we are passing undefined as the first parameter and ES6 will use
the default value 45 instead.

Function default values can be more than just simple values like 45; they
can be any valid expression, even a function call. You can use complex
expression as default values for parameters. Default vale expression are
evaluated lazily, meaning they're run only if a parameter's argument is
not present or is undefined.


```js
var getFirstName = () =>  "Edwin";

var getAnswerTwo = function(fistname = getFirstName(), item = "universe") {
   console.log(fistname + " is the answer to " + item);
}

getAnswerTwo();
```

Checking the number of arguments.


```js
 console.log(arguments.length);
```

**arguments.lenght** only returns the number of arguments passed to it.

Another awesome feature of the default parameters before it is the fact
that they work even when creating a dynamic function.


```js
var getNumber = new Function("number = 45", "return number;");
console.log(getNumber());
```
### Rest and Spread Operators.

Javascript has always had the feature of allowing functions to be passed
fewew or more parameters than formally specified in the function
declared without any problems. 

Many modern programing languages provides the ability for the function
to accept a variable number of parametrs. ES6 introduces this much
needed feature to Javascript with Rest parameters. You now have the
ability to pass a function a dynamic number of parameter very easily.
If you wanted to do this In ES5 you would have to put all the values in
a data container data type like an array. The rest parametres simplify
this entire process.

```js
var showCollection = function(id, ...collection) {
   console.log(collection instanceof Array);
}

showCollection(45, "movie", "music");
```
The ... symbol is the **rest symbol**. It precedes a named parameter.
This named parameter will become an Array that will just gather up all
the remaining parameters passed to the function. 

Collection is set to an Array. To make this more clear if we execuet the
above this way,


The rest parameter gathers up all the remaining parameters after the id
parametre and make it into an array called collection. Excluding the
first defined parameters 'id', everything will be placed in the Array.

Rest parameters were meant to replace arguments and arguments object was
completely done away with, but ES4 never came into being and in ES6,
this concept was reintroduced, but this time the 'arguments' has not
been removed from the language.

We can use the rest operator in a function constructor. check the
following new function that has a rest parameter and return the very
first argument that is passed into it.

var getFirst = new Function("...args", "return args[0]");
console.log(getFirst(1,3)); // 1

### The Spread Operator.

The spread operator, which is also denoted by ***...** before an array.
does essentiall the reverse operation of a rest operator. It spreads out
an array and passes the value into the specified function.


let values = [200,500,400];
let newSet = [400, ...values, 600];
console.log(newSet); //[ 400, 200, 500, 400, 600 ]

In case of the rest parameters, you can combine multiple arguments into
a single array, while in case of the spread operator you can specify a
single array that can be split into seperate argument that can be passed
into a function or method.


```js
let number = [-45, 45,64,84,64];
console.log(Math.max(...number,804));
```

The spread operator helps in handling arguments to passed to a function
as array much easier. Just like the rest operator, you can use the
spread operator in a function constructor as well.

If you spread out an empty array which might be missing two values like
[,,] the last comman is considered a trailing comma that is ignored. The
parameters spread out would be undefined.

### 0bject Literal Extensions  

ES6 introduces some new extensions for Object Literals.
   To declare object literals, currently using variables we have to use
   the follwoing coding pattern:

```javascript
var price = 4.4, quantity = 4
var invoiceData = {
  price: price,
  quantity: quantity
}
console.log(invoiceData);
```

Declaring price and quantity twice is kind of redundant, but now Es6
offers a shorthand making writing this simpler. Check the following
example

```js
const price = 4.5, quantity = 6
const invoiceData = {
    price, quantity
}
console.log(invoiceData)
```

We can just list the field once and the object literal in ES6 is smart
enough to interpret that we want a field called price and want the
context data set to the value of the variable called price.

ES6 also gives us a short notation to write functions in an object
literal. 


```js
const price = 4.5, quantity = 6
const invoiceData = {
    price, quantity,
   calculateTotal(){
      return price * quantity;
   }
}

console.log(invoiceData.calculateTotal())
```
When you use the function shorthand withing an objet literal, this
refers to the context of te code just like an arrow function. It does
not refer to the object that contains the function. It behave exactly
like an arrow function.

Note you can use dynamic field names in an object literal.


```js
const field = 'dynamicRandom'
const price = 4.66
const quantity = 6
const invoiceData = {
  [field]: price,
  quantity,
  calculateTotal(){
      return this.price * this.quantity;
  }
}

console.log(invoiceData)
```
You could even make naming properties more dynamic.


```js
const invoiceData = {
  [field + "-01"]: price,
  quantity,
  calculateTotal(){
      return this.price * this.quantity;
  }
}
```
### Template Literals and Delimeters. 

ES6 introduced Template Literals which provides you a wat to define
strings with additional functinalities like:

 1. String interpolation.
 2. Embedded expressions.
 3. Multiline strings without hacks.
 4. String formattings.

 Template Literals use backticks  rather than single or double
 quotes. Templete literals , in the end always produce strings. A
 template literal can be written as follows.

 let user = `kelvin`;


```js
let user = `kelvin`
console.log(`Hi ${user}`);
```

Template literals allow **string substitutions** that provides us a way
to substitute any valid Javascript expression inside a string. Template
literal can contain placeholder for string substitution using the ${}
sytax.

We can also substitute alot more that varible names. Template literals
allow us to use expression interpolation to embed readable inline math.

```js
let a = 40
let b = 18
console.log(`sum of ${a} and ${b} is ${a+b}`);
```
Template string allow you to add multiline strings easily without using
the new line escape sequence.

```js
// Multiline
console.log(`I am Line one 
I am line two`);
```

### Tagged Template Literals

A more advance form of templaet literal are tageed template literals .
Tagged template transforms a Template String by placin a function name
before the template string. Fox example.


```js
output `Hi , my name is ${name} and I love ${language}`
```

### Iterating with for..of

Over the last two decade in javascript, we have been iterating using the
**for**, **for-in** and **forEach** in case of arrays. ES6 introduced
another structure for the **for..of** loop which allows iterating over
interable objects such as arryay , map, set, string, etc.


the common way includes

```js
let names = ['matt', 'smith', 'jack']

for (let i = 0; i< names.length; i++) {
    console.log(names[i]);
}
```


```js
let names = ['matt', 'smith', 'jack']

for (let name of names) {
   console.log(name);
}
```
the iteration become lesser and cleaner with the new iteration unlike the
first one which we had to maintain the value of i in each iteration step.

Note the value you llop over using the **for..of** must be an iterable. An
iterable is simple an objec that is able to produce an iterator, which the
loop then uses. The for...of llop doen't just work for arrarys but also
other iterable leke DOM Nodelist object, the argument object and string
objects.

Just like witl arrays, the for_of make it easy to  iterate over these
non_array sequence. 

### summary

New syntax comes with an aim in mind.

1. Help in writing cleaner code,
2. debugging faster.
3. Implementing logic in fewer lines
4. Avoiding confusion.

### Destructuring.

Object literals and arrays are probably some of the most widely notations
in JavaScript. The popularity of these JavaScript notation is further
extended to even outside the language with there presence in thn JSON data
format.

#### Destructuring of Objects and Arrays

Destructuring is basically a convinient way of breaking the data structure
into smaller pieces to access its data more easily and extract multiple
values from Objects or Arrays. T understand destructuring better, simply
think of it as a structured assignment from an object or array. Consider
the following example.

```js
var numbers = {
    a: 4, b: 7, c: 5
}

var a = numbers.a,
    b = numbers.b,
    c = numbers.c

console.log(a,b,c);
```
ES6 makes this pattern of structured assignment simpler through a new and
dedicated syntax called **destructuring**;

This syntax eliminates the need for the temporary, intermidiate variables -
letters and numbers. Consiter the following examples.

```js 
var numbers = {
    a: 4, b: 7, c: 5
}

var [x,y,z] = ["a","b","c"];
var {a:a, b:b , c:c} =  numbers;

console.log(a,b,c);
```
Fetching information from objects and arrays and putting them into local
variables needet a lot more code. Imagine you needet to extract value from
a very large object or array and store themin variable of the same name.
You would have to write a lot of code assigning value to them one by one,
but using destructruing, this process gets reduced to a single assingment
statement.

### Object destructuring syntax
