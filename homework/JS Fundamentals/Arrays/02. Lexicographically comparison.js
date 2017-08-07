// Write a program that compares two char arrays lexicographically (letter by letter).

function compareArrLexicography(arr1, arr2) {
  var length = Math.min(arr1.length, arr2.length);
  var result;

for (var i = 0; i < length; i += 1) {
  if (arr1[i] > arr2[i]) {
    result = '>';
  } else if(arr2[i] > arr1[i]) {
    result = '<';
  } else {
    result = '=';
  } return result;
}

var arr1 = ['a', 'b', 'c'];
var arr2 = ['a', 'b', 'd'];
compareArrLexicography(arr1, arr2);
