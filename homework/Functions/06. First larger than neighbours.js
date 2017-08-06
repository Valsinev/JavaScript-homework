// Write a method that returns the index of the first element in array that is larger than its neighbours, or -1, if there is no such element.

function largerThanNeighbours(array) {
  let numbers = array.split(' ').map(Number);
  let output;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1] &&
        numbers[i] > numbers[i + 1]) {
      output = numbers.indexOf(numbers[i]);
      break;
    } else {
      output = -1;
    }
  }

  return output;
}

var arr = '-26 -25 -28 31 2 27';
console.log(largerThanNeighbours(arr));
