// Write a program that finds the length of the maximal sequence of equal elements in an array of N integers.

function compareArrLexicography(arr) {
  var counter = 1;
  var max = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) {
      counter += 1;
      if (max < counter) {
        max = counter;
      }
    } else {
      counter = 1;
    }

  } return max;
}

var array = ['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1'];
var output = compareArrLexicography(array);
console.log(output);
