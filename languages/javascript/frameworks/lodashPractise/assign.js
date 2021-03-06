var _ = require("lodash");

var foo = {
  a: "a property",
};

var bar = {
  b: 4,
  c: "an other property",
};

var result = _.assign(
  {
    a: "an old property",
  },
  foo,
  bar
);

var resultSpread = { ...foo, ...bar };

console.log(JSON.stringify(result));

console.log("Using the spread operators");
console.log(JSON.stringify(resultSpread));
