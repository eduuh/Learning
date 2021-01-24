function getSum(a = 4,b = 45) {
  console.log(a + b);
}

getSum()
getSum(1, 4)
getSum(4)
getSum(null, 5)

var getAnswer = function(number = 45, item = "universe") {
   console.log(number + " is the answer to " + item);
}

getAnswer(undefined, "life");

var getFirstName = () =>  "Edwin";

var getAnswerTwo = function(fistname = getFirstName(), item = "universe") {
   console.log(fistname + " is the answer to " + item);

  console.log(arguments.length)
}

getAnswerTwo();
