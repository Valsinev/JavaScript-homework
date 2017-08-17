// Write a function that prints all underaged persons of an array of person
// Use Array#filter and Array#forEach
// // Use only array methods and no regular loops (for, while)


function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

let petur = new Person('Petur', 'Petrov', 27, 'male');
let georgi = new Person('Georgi', 'Petrov', 12, 'male');
let zlati = new Person('Zlatka', 'Petrova', 26, 'female');
let petka = new Person('Petka', 'Petrova', 11, 'male');
let stanimir = new Person('Stanimir', 'Petrov', 14, 'male');

let arr = [ petur, georgi, zlati, petka, stanimir ];

function printYongerThan18(array) {
  let underAged = array.filter(x => x.age < 18);
  underAged.forEach(x => console.log(x));
}

printYongerThan18(arr);
