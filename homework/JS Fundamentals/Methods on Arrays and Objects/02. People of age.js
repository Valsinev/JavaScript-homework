// Write a function that checks if an array of person contains only people of age (with age 18 or greater)
// Use only array methods and no regular loops (for, while)

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

let petur = new Person('Petur', 'Petrov', 27, 'male');
let georgi = new Person('Georgi', 'Petrov', 21, 'male');
let zlati = new Person('Zlatka', 'Petrova', 26, 'female');
let petka = new Person('Petka', 'Petrova', 19, 'male');
let stanimir = new Person('Stanimir', 'Petrov', 18, 'male');

let arr = [ petur, georgi, zlati, petka, stanimir ];

function checkIfAdults(array) {
  return array.every(x => x.age >= 18);
}
console.log(checkIfAdults(arr));
