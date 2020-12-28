const factorial = function computeFactorialwith(num){

  const cache = {}

  var result = 2;
  for (let w = 2; w <= 3; w++) {
    console.log(
        `result = ${result}* ${w} = ${result * w}`
    );
    result *=w;
  }
}

factorial(3)