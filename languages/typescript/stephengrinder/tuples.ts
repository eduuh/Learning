const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 50];
const tea: Drink = ["brown", false, 30];

//Why and when we might use them
const carSpecs: [number, number] = [400, 3354];
//objects are better to use. They are clear

const carStats = {
  horsepower: 400,
  weight: 3354,
};

