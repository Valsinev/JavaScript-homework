// Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots). Calculates and prints its real roots.
// Note: Quadratic equations may have 0, 1 or 2 real roots.

function quadraticEquationRoot(input) {
  var a = +input[0];
  var b = +input[1];
  var c = +input[2];
  var result;
  var d = (b * b) - 4 * a * c;
  if (d > 0) {
    var x1 = (-b - Math.sqrt(d)) / (2 * a);
    var x2 = (-b + Math.sqrt(d)) / (2 * a);
    if (x1 < x2)
      {
        result = x1.toFixed(2) + ' < ' + x2.toFixed(2);
    } else {
        result = x1.toFixed(2) + ' > ' + x2.toFixed(2);
    }
  } else if (d === 0) {
    var x = -b / (2 * a);
        result = x.toFixed(2);
  } else{
    result = 'no real root';
  }
  return result;
}

var arr = ['1','10','20'];
console.log(quadraticEquationRoot(arr));
