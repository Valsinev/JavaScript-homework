// Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second. As a result print the values a and b, separated by a space.

function exchangeIfGreater(input) {
  var first = input[0];
  var second = input[1];
  var result
  if (first > second) {
    first = input[1];
    second = input[0];
  }
  result = first + ' ' + second;
  return result;
}

var arr = ['3.34786','3.34787'];
console.log(exchangeIfGreater(arr));
