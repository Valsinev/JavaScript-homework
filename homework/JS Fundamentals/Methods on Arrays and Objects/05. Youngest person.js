// Write a function that finds the youngest male person in a given array of people and prints his full name
// Use only array methods and no regular loops (for, while)
// Use Array#find

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

function youngestMalePersonFinder(array) {
  let sorted = array.sort((a, b) => a.age - b.age);
  let yongestMale = sorted.find(x => x.gender === 'male');
  return yongestMale;
}

console.log(youngestMalePersonFinder(arr));
