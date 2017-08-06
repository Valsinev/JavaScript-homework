// Write a method that returns the maximal element in a portion of array of integers starting at given index. Using it write another method that sorts an array in ascending / descending order. Write a program that sorts a given array.

function arraySorter(array) {
  let numbers = array.split(' ').map(Number),
      sorted = numbers.sort(function(a, b) { return a - b }),
      output = sorted.join(' ');

  return output;
}

function arrayMax(arr) {
  let len = arr.length,
  max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }

  return max;
};

function maxElementOfSlicedArray(array, index) {
  let numbers = array.split(' ').map(Number).slice(index),
      max = arrayMax(numbers);

  if (index < 0 || index > array.length) {
    index = 0;
  }

  return max;
}

var arr = '36 10 1 34 28 38 31 27 30 20';
console.log(arraySorter(arr));

console.log(maxElementOfSlicedArray(arr, 2));
