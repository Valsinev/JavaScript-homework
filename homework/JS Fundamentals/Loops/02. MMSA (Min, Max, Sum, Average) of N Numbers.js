// Implement a javascript function that accepts an array of floating-point numbers as strings and returns the minimal, the maximal number, the sum and the average of all numbers (displayed with 2 digits after the decimal point).

function minMaxSumAvrg(input) {
var length = input.length;
var sum = 0;
var average;
var result;
  for (var i = 0; i < length; i+=1) {
        sum += +input[i];
  }
var max = Math.max(...input);
var min = Math.min(...input);
average = sum / length;

result = 'min = ' + min + '\n' +
'max = ' + max + '\n' +
'sum = ' + sum + '\n' +
'average = ' + average;

 return result;
}

var arr = ['10','20','3'];
console.log(minMaxSumAvrg(arr));
