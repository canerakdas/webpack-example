// Classes
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get name() {
    // Template strings
    return `${this.firstName} ${this.lastName}`;
  }

  toString() {
    return this.name;
  }
}

console.log(
  'Full name is:',
  new Person('Michael', 'Bluth')
);

// Arrow functions
console.log([1, 2, 3].map(x => x * x));

// Rest params
function join(delim, ...items) {
  return items.join(delim);
}

// Spread args
console.log(join('-', ...[415, 555, 1212]));

var obj = {
  "shorthand" :"a",
  method() {
    return "😀";
  }
};
console.log(obj)