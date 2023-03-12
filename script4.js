'use strict';

const isObjEmpty = (obj) => Object.keys(obj).length === 0;

const user = {
  name: 'Mr Goose',
  age: 42,
  sayHello() {
    alert(`Hi, my name is ${this.name} and I am ${this.age} years old`);
  },
};

let bigBrainCalc = {
  firstNumber: null,
  secondNumber: null,
  newFirstNumber: null,
  newSecondNumber: null,
  errorMassage: `It is possible that one or two values are not a number, BB and GG!! Press F to pay respect!!`,
  ask() {
    this.firstNumber = prompt('Enter first number');
    this.secondNumber = prompt('Enter second number');
    this.newFirstNumber = +this.firstNumber;
    this.newSecondNumber = +this.secondNumber;
  },
  numberChecking() {
    return this.firstNumber === '' ||
      this.secondNumber === '' ||
      isNaN(Number(this.firstNumber + this.secondNumber)) ||
      this.firstNumber === null
      ? false
      : true;
  },
  sum() {
    return this.numberChecking()
      ? `sum ${this.firstNumber} + ${this.secondNumber} = ${
          this.newFirstNumber + this.newSecondNumber
        }`
      : this.errorMassage;
  },
  mul(x, y) {
    return this.numberChecking()
      ? `the result of multiplying ${this.firstNumber} * ${
          this.secondNumber
        } = ${this.newFirstNumber * this.newSecondNumber}`
      : this.errorMassage;
  },
  //bonus
  subtract() {
    if (this.numberChecking()) {
      if (this.newFirstNumber < this.newSecondNumber) {
        return confirm('are you sure about that?')
          ? `result of subtraction ${this.firstNumber} - ${
              this.secondNumber
            } = ${this.newFirstNumber - this.newSecondNumber}, you are tuff guy`
          : 'the result will be less than 0 and not acceptable to you';
      } else {
        return `result of subtraction ${this.firstNumber} - ${
          this.secondNumber
        } = ${this.newFirstNumber - this.newSecondNumber}`;
      }
    }
    return this.errorMassage;
  },
  divide() {
    if (this.numberChecking()) {
      return this.newSecondNumber === 0
        ? 'cannot be divided by zero'
        : `the result of dividing ${this.firstNumber} / ${
            this.secondNumber
          } = ${this.newFirstNumber / this.newSecondNumber}`;
    }
    return this.errorMassage;
  },
  ///extra bonus
  mathSelector() {
    this.ask();
    const operationType = prompt('Enter operation type: +, -, *, /');

    if (operationType === '+') {
      alert(this.sum());
    } else if (operationType === '-') {
      alert(this.subtract());
    } else if (operationType === '/') {
      alert(this.mul());
    } else if (operationType === '*') {
      alert(this.divide());
    } else {
      alert('invalid operation');
    }
  },
};

bigBrainCalc.mathSelector();

// bigBrainCalc.ask();
// alert(bigBrainCalc.mul());
// alert(bigBrainCalc.sum());
// alert(bigBrainCalc.subtract());
// alert(bigBrainCalc.divide());

// console.log(isObjEmpty(user));
// user.sayHello();
