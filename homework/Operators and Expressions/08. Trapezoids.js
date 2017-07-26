// Implement a javascript function that calculates trapezoid's area by given sides a and b and height h. The three values should be read from the console in the order shown below. All three value will be floating-point numbers.

function trapezoidArea(input) {
  var sideOne = +input[0];
  var sideTwo = +input[1];
  var height = +input[2];
  var area = ((sideOne + sideTwo) / 2) * height;
  return area;
}

var arr = ['1.5','2.23','3.5465'];
console.log(trapezoidArea(arr));
