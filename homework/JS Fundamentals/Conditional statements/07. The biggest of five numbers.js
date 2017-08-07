// Write a script that finds the biggest of given 5 variables.

function maxOfFive(input) {

  var max;
  var first = +input[0];
  var second = +input[1];
  var third = +input[2];
  var fourth = +input[3];
  var fifth = +input[4];

  if (first > second && first > third && first > fourth && first > fifth) {
    max = first;
  }else if(second > third && second > fourth && second > fifth) {
    max = second;
  }else if(third > fourth && third > fifth) {
    max = third;
  }else if(fourth > fifth) {
    max = fourth;
  } else {
    max = fifth;
  }
  return max;
}

var arr = ['2','5','4','8','20'];
console.log(maxOfFive(arr));
