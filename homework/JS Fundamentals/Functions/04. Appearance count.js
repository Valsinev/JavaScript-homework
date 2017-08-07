// Write a method that counts how many times given number appears in a given array. Write a test program to check if the method is working correctly.

function appearanceCounter(array, number) {
  let numbers = array.split(' ').map(Number);
  let counter = 0;

  for (num of numbers) {
    if (num === number) {
      counter += 1;
    }
  }

  console.log(counter);
}

var arr = '28 6 21 6 -7856 73 73 -56';
appearanceCounter(arr, 73);
