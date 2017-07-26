// mplement a javascript function that accepts an array containing an integer N as string (which will always be less than 100 or equal) and uses an expression to check if given N is prime (i.e. it is divisible without remainder only to itself and 1).

function checkIfPrime(input) {
var maxDivider = Math.sqrt(input[0] | 0);
var result = true;
  if (input[0] <= 0) {
    result = false;
  }
  for (var i = 2; i <= maxDivider; i+=1) {
    if (input[0] % i === 0) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
}

var arr = ['1'];
console.log(checkIfPrime(arr));
