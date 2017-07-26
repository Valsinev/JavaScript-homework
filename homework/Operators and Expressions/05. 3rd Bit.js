// Using bitwise operators, write a javascript function(that accepts a single array with arguments as a parameter) that uses an expression to find the value of the bit at index 3 of an unsigned integer read from the console.
//
// The bits are counted from right to left, starting from bit 0.
// The result of the expression should be either 1 or 0. Print it on the console.

function dec2bin(input){
    var bin = (input[0] >>> 0).toString(2);
    var binIndex3 = bin.slice(-3, -2);
    return binIndex3;
}

var arr = ['9'];
console.log(dec2bin(arr));
