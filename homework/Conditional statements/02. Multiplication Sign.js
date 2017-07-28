// Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it. Use a sequence of if operators.

function exchangeIfGreater(input) {
  var result;
  var first = +input[0];
  var second = +input[1];
  var third = +input[2];
  if (first === 0 || second === 0 || third === 0) {
    result = '0';
  } else if (
    (first < 0 && second < 0 && third < 0) ||
    (first < 0 && second > 0 && third > 0) ||
    (first > 0 && second < 0 && third > 0) ||
    (first > 0 && second > 0 && third < 0)) {
    result = '-';
  }
  else {
    result = '+';
  }
  return result;
}

var arr = ['4','5','4'];
console.log(exchangeIfGreater(arr));
