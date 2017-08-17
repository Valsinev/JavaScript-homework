// Write a function for creating persons.
// Each person must have firstname, lastname, age and gender (true is female, false is male)
// Generate an array with ten person with different names, ages and genders

function Person(firstName, lastName, age, gender) {
  if (gender === 'male') {
    this.gender = false;
  } else if (gender === 'female') {
    this.gender = true;
  }

  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

let petur = new Person('Petur', 'Petrov', 27, 'male');
