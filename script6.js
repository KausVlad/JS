'use strict';
const firstNumberState = document.querySelector('.first-number');
const secondNumberState = document.querySelector('.second-number');

const result = document.querySelector('.result');
const mathSign = document.querySelector('.math-sign');

const firstPrompt = document.querySelector('.first-prompt');
const secondPrompt = document.querySelector('.second-prompt');

const sum = document.querySelector('.sum');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');

let bigBrainCalc = {
  firstNumber: null,
  secondNumber: null,
  newFirstNumber: null,
  newSecondNumber: null,
  errorMassage: `It is possible that one or two values are not a number, BB and GG!! Press F to pay respect!!`,
  ask() {
    // old method
    this.firstNumber = prompt('Enter first number');
    this.secondNumber = prompt('Enter second number');
    this.newFirstNumber = +this.firstNumber;
    this.newSecondNumber = +this.secondNumber;
  },
  askFirstNumber() {
    this.firstNumber = prompt('Enter first number');
    this.newFirstNumber = +this.firstNumber;
  },
  askSecondNumber() {
    this.secondNumber = prompt('Enter second number');
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
      ? this.newFirstNumber + this.newSecondNumber
      : this.errorMassage;
  },
  mul() {
    return this.numberChecking()
      ? this.newFirstNumber * this.newSecondNumber
      : this.errorMassage;
  },
  //bonus
  subtract() {
    if (this.numberChecking()) {
      if (this.newFirstNumber < this.newSecondNumber) {
        return confirm('are you sure about that?')
          ? this.newFirstNumber - this.newSecondNumber
          : 'the result will be less than 0 and not acceptable to you';
      } else {
        return this.newFirstNumber - this.newSecondNumber;
      }
    }
    return this.errorMassage;
  },
  divide() {
    if (this.numberChecking()) {
      return this.newSecondNumber === 0
        ? 'cannot be divided by zero'
        : this.newFirstNumber / this.newSecondNumber;
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

firstPrompt.addEventListener('click', () => {
  bigBrainCalc.askFirstNumber();
  firstNumberState.textContent = bigBrainCalc.firstNumber;
});
secondPrompt.addEventListener('click', () => {
  bigBrainCalc.askSecondNumber();
  secondNumberState.textContent = bigBrainCalc.secondNumber;
});
sum.addEventListener('click', () => {
  result.textContent = bigBrainCalc.sum();
  mathSign.textContent = '+';
});
multiply.addEventListener('click', () => {
  result.textContent = bigBrainCalc.mul();
  mathSign.textContent = '*';
});
subtract.addEventListener('click', () => {
  result.textContent = bigBrainCalc.subtract();
  mathSign.textContent = '-';
});
divide.addEventListener('click', () => {
  result.textContent = bigBrainCalc.divide();
  mathSign.textContent = '/';
});
