// Implement a javascript function that by given coordinates of a point x and y and using an expression checks if given point (x, y) is inside a circle K({0, 0}, 2) - the center has coordinates (0, 0) and the circle has radius 2. The program should then print "yes DISTANCE" if the point is inside the circle or "no DISTANCE" if the point is outside the circle.

function checkPoint(input) {
  var result = '';
  debugger;
  if(Math.pow(input[0],2) + Math.pow(input[1],2) <= 4) {
    result = "yes DISTANCE";
  } else {
    result = "no DISTANCE";
  }
  return result;
}

var arr = [-1.,1.5];
console.log(checkPoint(arr));
