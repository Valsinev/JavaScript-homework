// Write a function that calculates the average age of all females, extracted from an array of persons
// Use Array#filter
// Use only array methods and no regular loops (for, while)


function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

let petur = new Person('Petur', 'Petrov', 27, 'male');
let georgi = new Person('Georgi', 'Petrov', 12, 'male');
let zlati = new Person('Zlatka', 'Petrova', 26, 'female');
let petka = new Person('Petka', 'Petrova', 11, 'female');
let stanimir = new Person('Stanimir', 'Petrov', 14, 'male');
let tereza = new Person('Tereza', 'Petrova', 30, 'female');

let arr = [ petur, georgi, zlati, petka, stanimir, tereza ];

function averageAgeOfFemales(array) {
  let allFemaleAges = array.filter(x => x.gender === 'female').map(x => x.age);
  let result = allFemaleAges.reduce((a, b) => a + b, 0) / allFemaleAges.length | 0;

  return result;
}

console.log(averageAgeOfFemales(arr));
