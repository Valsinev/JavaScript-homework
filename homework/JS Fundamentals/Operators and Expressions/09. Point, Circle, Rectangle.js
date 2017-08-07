// Implement a javascript function that accepts an array with a pair of coordinates x and y and uses an expression to checks for given point (x, y) if it is within the circle K({1, 1}, 1.5) and out of the rectangle R(top=1, left=-1, width=6, height=2)


function solve(args) {
    var output;
    var x = +args[0];
    var y = +args[1];

    // circle (01{x1,y1}, r)
    var x1 = 1;
    var y1 = 1;
    var r = 1.5;

    // rectangle's parameters
    var top = 1;
    var left = -1;
    var width = 6;
    var height = 2;

    // Pythagorean theorem
    var insideCircle = (x - x1) * (x - x1) + (y - y1) * (y - y1) <= r * r;

    var insideRectangle = (x >= left) && (x <= (left + width)) && (y >= (top - height)) && (y <= top);

    if (insideCircle && insideRectangle) {
        output = "inside circle inside rectangle";
    } else if (insideCircle && !insideRectangle) {
        output = "inside circle outside rectangle";
    } else if (!insideCircle && insideRectangle) {
        output = "outside circle inside rectangle";
    } else {
        output = "outside circle outside rectangle";
    }
    console.log(output);
}

solve([2.5, 2]);
solve([0, 1]);
solve([2.5, 1]);
solve([1, 2]);
