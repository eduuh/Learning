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

let {
  orange: { quantity: orangequantity },
} = nestedValues;

let { apple = {} } = nestedValues;

console.log(quantity);
console.log(orangequantity);
console.log(apple);

let fruits = ["apple", ["blueberry", "rasberry"], "orange"];

let [fru, [f, fx], fruit] = fruits;

console.log(fru);
console.log(f);
console.log(fruit);
console.log(fx);

let student = {
  name: "tony",
  courses: {
    englis: {
      id: 0,
      score: 4,
    },
    math: {
      id: 5,
      score: 6,
    },
  },
  scoreRange: [0, 10],
};

let {
  courses: { english },
  scoreRange: [minScore],
} = student;

console.log(english);
console.log(scoreRange);
console.log(student);
