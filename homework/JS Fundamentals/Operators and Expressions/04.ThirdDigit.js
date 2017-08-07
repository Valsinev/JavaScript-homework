function thirdDigit(input) {
  var stringTrim = input[0].slice(-3, -2);
  var num = stringTrim | 0;
  var result = num !== 7 ? 'false' + ' ' + num : 'true';
  return console.log(result);
}

var arr = ['701'];
thirdDigit(arr);
