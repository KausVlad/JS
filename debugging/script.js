'use strict';
// 1
function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    sum += arr[i];
  }

  let avg = sum / arr.length;
}

let numbers = [1, 2, 3, 4, 5];

let avg = calculateAverage(numbers);
console.log('The average is: ' + avg); // має бути 3

// 2
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHello = function () {
  return `Hi. My name is ${name} and I'm {this.age} years old`;
};

const user = new User('Sherlock', 27);
console.log(user.sayHello); // має вивести "Hi. My name is Sherlock and I'm 27 years old"

// 3
const c = calculator();
console.log(c()); // має вивести 1
console.log(c()); // має вивести 2

const calculator = function (init = 0) {
  return function () {
    return init++;
  };
};
