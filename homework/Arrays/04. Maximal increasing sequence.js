// Write a program that finds the length of the maximal increasing sequence in an array of N integers.

function compareArrLexicography(arr) {
  var counter = 1;
  var max = 0;
  for (var i = 1; i < arr.length; i++) {
    if (+arr[i - 1] === (+arr[i] - 1)) {
      counter += 1;
      if (max < counter) {
        max = counter;
      }
    } else {counter = 1;
    }

  } return max;
}

var array = ['8', '7', '3', '2', '3', '4', '2', '2', '4'];
var output = compareArrLexicography(array);
console.log(output);
