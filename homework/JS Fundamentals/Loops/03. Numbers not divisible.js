// Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time

function notDivisibleBy3and7(input) {
  var allNotDiv = [];
  var result;
  for (var i = 0; i < input.length; i+=1) {
    if (+input[i] % 7 === 0 && +input[i] % 3 === 0) {
      continue;
    } else {
      allNotDiv.push(input[i]);
    }
  }
  result = allNotDiv.join(', ');
  return result;
}

var arr = ['21','20','42','3','7'];
console.log(notDivisibleBy3and7(arr));
