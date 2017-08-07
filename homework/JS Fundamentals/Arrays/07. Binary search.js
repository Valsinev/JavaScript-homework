// Write a program that finds the index of given element X in a sorted array of N integers by using the Binary search algorithm.

function binarySearch(numbers, numberToFind) {
  var min, max;
  min = 0;
  max = numbers.length - 1;
  while (max >= min) {
    var middle = Math.floor((min + max) / 2);
    if (numbers[middle] < numberToFind) {
      min = middle + 1;
    } else if (numbers[middle] > numberToFind) {
      max = middle - 1;
    } else {
      return middle;
    }
  } return -1;
}

var array = [1, 2, 4, 8, 16, 31, 32, 64, 77, 99, 32];
var output = binarySearch(array, 32);
console.log(output);
