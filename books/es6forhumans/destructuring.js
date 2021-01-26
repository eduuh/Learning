var [x, y, z] = ["a", "b", "c"];
var { a: a, b: b, c: c } = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(x, y, z);
console.log(a, b, c);

var { a: foo, b: bar, c: baz } = { a: 2, b: 4, c: 3 };
console.log(foo, bar, baz); // 1 2 3

var foo = 45,
  bar = 5454;

var obj = {
  a: foo,
  b: bar,
};

var { a: FOO, b: BAR } = obj;
console.log(FOO, BAR);

// getting the values
console.log("focus on the next output edd");
let item = {
    name: "Apples",
    quantity: 5,
  },
  name = "Oranges",
  quantity = 5;

({ name, quantity } = item);

console.log(name, quantity);

var itemDefault = {
  fruit: "Apples",
  number: 5,
};

var { fruit = "Mango", number = 2, values = 54 } = itemDefault;

console.log(name);
console.log(quantity);
console.log(values);

var { a, b, c: c = 5, d: foo = 54 } = { a: 4, b: 45 };
console.log(a, b, c, foo);

let nestedValues = {
  count: 2,
  name: "fruits",
  apple: {
    quantity: 5,
    value: 56,
  },
  orange: {
    quantity: 2,
    value: 4,
  },
};

let {
  apple: { quantity },
} = nestedValues;
console.log(quantity);
