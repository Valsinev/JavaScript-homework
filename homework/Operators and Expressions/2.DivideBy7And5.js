function divideBy7or5(input) {
  let number = input[0] | 0;
  if (number % 7 === 0 && number % 5 === 0) {
    console.log('true NUMBER');
  } else {
    console.log('false NUMBER');
  }
}

let thirtyFive = ['35'];
divideBy7or5(thirtyFive);
