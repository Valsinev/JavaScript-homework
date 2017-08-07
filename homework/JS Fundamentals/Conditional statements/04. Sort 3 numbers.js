// Sort 3 real values in descending order. Use nested if statements.

// Note: Don’t use arrays and the built-in sorting functionality.

function sortByDescOfThree(input) {

  var sorted;
  var first = +input[0];
  var second = +input[1];
  var third = +input[2];
  if (first > second) {
    if (second < third) {
      sorted = first + ' ' + third + ' ' + second;
    } else {
      sorted = first + ' ' + second + ' ' + third;
    }
  }
  else if (first > third) {
    sorted = second + ' ' + first + ' ' + third;
  }
  else {
    sorted = second + ' ' + third + ' ' + first;
  }
  return sorted;
}

var arr = ['20','50','40'];
console.log(sortByDescOfThree(arr));
