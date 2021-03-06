let activities = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
];

activities.splice(0, 0, ["Programming", 2]);

for (let i = 0; i < activities.length; i++) {
  var innerArraylength = activities[i].length;
  for (let j = 0; j < innerArraylength; j++) {
    console.log("[" + i + "," + j + "] = " + activities[i][j]);
  }
}

activities.pop();
console.table(activities);
//activities.splice(1, 0, ["Programming", 2]);

let count = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const func = (arr) => {
  let hourglass = new Array();
  // the first element wl be at 0,0 , the second element 0,1 , the third element  will be at 0,2

  for (let i = 0; i < arr.length; i++) {
    let column = arr[i];
    const array = [[column[0], column[1], column[2]]];
    hourglass.push(i, array);
    console.table(hourglass);
  }
};

func(count);
