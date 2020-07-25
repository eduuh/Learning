const carMakers: string[] = ["ford", "toyota", "chevy"];

const date: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["camero"], ["audi"]];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(200);
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2050-9-4");
importantDates.push(new Date());

