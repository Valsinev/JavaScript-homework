// Write a script that finds the biggest of three numbers. Use nested if statements.

function maxOfThree(input) {

  var max;
  var first = +input[0];
  var second = +input[1];
  var third = +input[2];
  if (first > second) {
    if (first > third) {
      max = first;
    } else {
      max = third;
    }
  }
  else if (second > third) {
    max = second;
  }
  else {
    max = third;
  }
  return max;
}

var arr = ['20','5','4'];
console.log(maxOfThree(arr));
