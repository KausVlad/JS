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
  firstNumber: undefined,
  secondNumber: undefined,
  ask() {
    this.firstNumber = prompt('Enter first number');
    this.secondNumber = prompt('Enter second number');
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
          Number(this.firstNumber) + Number(this.secondNumber)
        }`
      : `It is possible that one or two values are not a number, BB and GG!! Press F to pay respect!!`;
  },
  mul(x, y) {
    return this.numberChecking()
      ? `the result of multiplying ${this.firstNumber} * ${
          this.secondNumber
        } = ${Number(this.firstNumber) * Number(this.secondNumber)}`
      : `It is possible that one or two values are not a number, BB and GG!! Press F to pay respect!!`;
  },
  //bonus
  subtract() {
    if (this.numberChecking()) {
      if (Number(this.firstNumber) < Number(this.secondNumber)) {
        return confirm('are you sure about that?')
          ? `result of subtraction ${this.firstNumber} - ${
              this.secondNumber
            } = ${
              Number(this.firstNumber) - Number(this.secondNumber)
            }, you are tuff guy`
          : 'the result will be less than 0 and not acceptable to you';
      } else {
        return `result of subtraction ${this.firstNumber} - ${
          this.secondNumber
        } = ${Number(this.firstNumber) - Number(this.secondNumber)}`;
      }
    }
    return `It is possible that one or two values are not a number, BB and GG!! Press F to pay respect!!`;
  },
  divide() {
    if (this.numberChecking()) {
      return Number(this.secondNumber) === 0
        ? 'cannot be divided by zero'
        : `the result of dividing ${this.firstNumber} / ${
            this.secondNumber
          } = ${Number(this.firstNumber) / Number(this.secondNumber)}`;
    }
    return `It is possible that one or two values are not a number, BB and GG!! Press F to pay respect!!`;
  },
  ///extra bonus
  mathSelector() {
    this.ask();
    const operationType = prompt('Enter operation type: +, -, *, /');

    if (operationType === '+') {
      alert(this.sum());
    }
    if (operationType === '-') {
      alert(this.subtract());
    }
    if (operationType === '/') {
      alert(this.mul());
    }
    if (operationType === '*') {
      alert(this.divide());
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
