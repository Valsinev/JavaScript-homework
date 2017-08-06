// Write a method that returns the last digit of given integer as an English word. Write a program that reads a number and prints the result of the method.

function lastDigitToWord(number) {
  let lastDigit = number % 10;
  let output = '';
  switch (lastDigit) {
    case 1: output = 'one'; break;
    case 2: output = 'two'; break;
    case 3: output = 'three'; break;
    case 4: output = 'four'; break;
    case 5: output = 'five'; break;
    case 6: output = 'six'; break;
    case 7: output = 'seven'; break;
    case 8: output = 'eight'; break;
    case 9: output = 'nine'; break;
    case 0: output = 'zero'; break;
    default: throw('Invalid input!');
  }
  return output;
}

function printLastDigitToWord(number) {
  console.log(lastDigitToWord(number));
}

printLastDigitToWord(42);
