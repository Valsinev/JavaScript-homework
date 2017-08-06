// Write a method GetMax() with two parameters that returns the larger of two integers. Write a program that reads 3 integers and prints the largest of them using the method GetMax().


function getMax(numbers) {
  let numbersArray = numbers.split(' ');
  let result = Math.max(+numbersArray[0], +numbersArray[1]);
  return result;
}

function getMaxFrom3(numbers) {
  let numbersArray = numbers.split(' ');
  let result = Math.max(getMax(numbers), numbersArray[2]);
  return result;
}

console.log(getMaxFrom3('7 19 19'));
