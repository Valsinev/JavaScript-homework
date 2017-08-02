// Write a program that finds the most frequent number in an array of N elements.

function compareArrLexicography(arr) {
 let length = arr.length,
  counter = 1,
  max = 0,
  maxElement,
  checkNumber,
  output;

  for (let i = 0; i < length; i++) {
    checkNumber = arr[i];
    for (let j = i + 1; j < length - 1; j++) {
      if (checkNumber === arr[j]) {
        counter += 1;
      }
    }

    if (max < counter) {
      max = counter;
      maxElement = +arr[i];
    }

    counter = 1;
    output = maxElement + ' (' + max + ' times)';
  } return output;
}

var array = ['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3'];
var output = compareArrLexicography(array);
console.log(output);
