### Setting up your environment

Implemeting the best practice classes in javascript.

1. EsLint - command line utility installed with the Node package manager (npm)
2. npm - Node.js packeage packager manager.
   using node init.

### start by initializing npm

npm init --yes

### installing eslint

### Extensions

#### Vscode

1. Eslint by Dirk   

TODO add screenshort of the extension


#### nvim

## javascript

Three things that are importants with objects.

1. Refernce type
2. Context
3. instantiation

### Reference Type

var number1 = 1;
var number2 = 1;
var object1 = { value: 4 }
var object2 = { value: 4 }
var object3 = object1; // references objects one. I want what is in the box of object1.

What a privitive type?

In javascript object are reference types. Reference types are created by the programmers.
When you create a new object a location is created for each.

object1.value = 56;

The above code does not change the first

### this Context

Context is defined by the this keyword.
Context is not scope.

Here are some the this context on varous javascript functions.

Invocation     |  this reference  |
function call   | global object or undefined |
event handler | element that fired event |
arrow function | context of caller |
constructor    | new object      |
method | parent object |

Limit your usage for this to your classe . Eslint rules can help us with this.

When your write a method like the following. It is valid.

```javascript
const calcTax = (rate) => { this.tax = this.total + rate};
```

Using eslint to enforce a rule to limit the this usage to the classes.

```eslint
module.exports = {
    "env": {
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
       strict: ["error", "global"],
       "new-cap": "error",
       "no-invalid-this": "error"
    }
};
```

When you place your code inside the class using the this keyword. It sort of becomes valid.

```javascript

class Cart {
   constructor(options){
      this.user = options.user
   }

calcTax (rate) { 
   this.tax = this.total + rate
};

}

```

Look at the code below. 👇. changing the context by cleating a new variable is not that readable
Therefore javascript provide new functions to help with changing of the context.

1. apply()
2. bind()
3. call()

All this function allow one to specify the context but they have different defaults and different flexibility.

```javascript
logCart(){
  const that = this;
  return function() {
    console.log(that)
  }
}
```

I want my methods to be neater like this 👇. To use the this method in the right context.

```javascript
logCart(){
    console.log(this)
}
```

But if I call the above method in an event lister. Like below this would print out the **window** object. The object responsible for firing the event.

```javascript
window.addEventListener("load", currentCart.logCart());
```

To go around that we could use the **call** method to bind the context to that of the object we created.

```javascript
window.addEventListener("load", currentCart.logCart.call(currentCart));
```

☝ the above code becomes more readable and easy to follow. And in my browser window console, My Cart content is actually printed out.

### New systax in react

The use of prototype.

### TODO: Try to Implement Yourself an array

### Naming Standards.

### Setting up Eslint to flag names that comes after the new keywork to be a capital letter.

 TODO: show out the outcome of the error.

Class name are PascalCase example **User**. This convention make your code easire to read

### Return this from the method

Returning this method allow our class to be more compact and we can chain in methods. Initially we had test code 
that below the class that were a few methods.

```javascript
const currentCart = new Cart({ user: LoggerInUser});
currentCart.total = 45;
currentCart.calcTax(rate);
console.log(currentCart);
```

Let do something about this ☝ . You will still have the option to use the method separately. The compact form becomes

```javascript
const currentCart = new Cart({ user: LoggerInUser})
currentCart.total = 45;
//currentCart.calcTax(rate);

currentCart
  .calcTax(rate)
  .calcShipping()
  .calcGrandTotal()

console.log(currentCart);
```
