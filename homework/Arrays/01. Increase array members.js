// Write a program that allocates array of N integers, initializes each element by its index multiplied by 5 and the prints the obtained array on the console.


function arrayMultiplierBy5(input) {
  var length = +input[0];
  var multiArray = [];
  for (var i = 0; i < length; i += 1) {
    multiArray[i] = i * 5;
  } return multiArray;
}

var arr = ['21'];
console.log(arrayMultiplierBy5(arr));
