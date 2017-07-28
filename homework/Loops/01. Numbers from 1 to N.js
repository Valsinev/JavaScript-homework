// Implement a javascript function that accepts an array with a single element - positive integer N as string and prints all the numbers from 1 to N inclusive, on a single line, separated by a whitespace.

function oneToN(input) {
  var n = +input[0];
  var numbers = [];
  var result;
  for (var i = 1; i <= n; i+=1) {
    numbers[i - 1] = i;
  }
  result = numbers.join(' ');
  return result;
}

var arr = ['50'];
console.log(oneToN(arr));
