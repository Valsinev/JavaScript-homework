function recAreaAndPerCalc(input) {
  let width = input[0];
  let height = input[1];

  let perimeter = (width + height) * 2;
  let area = width * height;
  let result = perimeter.toFixed(2) + ' ' + area.toFixed(2);

  return result;
}

let input = [4.5, 5];

console.log(recAreaAndPerCalc(input));
