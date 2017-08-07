// Sorting an array means to arrange its elements in increasing order. Write a program to sort an array. Use the Selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.

function swap(arr, firstIndex, secondIndex) {
  var temp = +arr[firstIndex];
  arr[firstIndex] = +arr[secondIndex];
  arr[secondIndex] = temp;
}

function compareArrLexicography(arr) {
  var length = arr.length;
  var min;
  for (i = 0; i < length; i++) {
    arr[i] = +arr[i];
    min = i;
    for (j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i != min) {
      swap(arr, i, min);
    }
  } return arr;
}

var array = ['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20'];
var output = compareArrLexicography(array);
console.log(output);
