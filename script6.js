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
  resultNumber: null,
  errorMassage: `NuN`,
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
      ? (this.resultNumber = this.newFirstNumber + this.newSecondNumber)
      : this.errorMassage;
  },
  mul() {
    return this.numberChecking()
      ? (this.resultNumber = this.newFirstNumber * this.newSecondNumber)
      : this.errorMassage;
  },
  subtract() {
    if (this.numberChecking()) {
      if (this.newFirstNumber < this.newSecondNumber) {
        return confirm('are you sure about that?')
          ? (this.resultNumber = this.newFirstNumber - this.newSecondNumber)
          : 'the result will be less than 0 and not acceptable to you';
      } else {
        return (this.resultNumber = this.newFirstNumber - this.newSecondNumber);
      }
    }
    return this.errorMassage;
  },
  divide() {
    if (this.numberChecking()) {
      return this.newSecondNumber === 0
        ? 'cannot be divided by zero'
        : (this.resultNumber = (
            this.newFirstNumber / this.newSecondNumber
          ).toFixed(2));
    }
    return this.errorMassage;
  },
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
  minusPlusCheck() {
    this.resultNumber > 0
      ? (result.style.color = `hsl(120, 100%, ${Math.min(
          Math.max(this.resultNumber / 10, 20),
          80
        )}%)`)
      : (result.style.color = `hsl(0, 100%, ${Math.min(
          Math.max(-this.resultNumber / 10, 20),
          90
        )}%)`);
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
  bigBrainCalc.minusPlusCheck();
  mathSign.textContent = '+';
});
multiply.addEventListener('click', () => {
  result.textContent = bigBrainCalc.mul();
  bigBrainCalc.minusPlusCheck();
  mathSign.textContent = '*';
});
subtract.addEventListener('click', () => {
  result.textContent = bigBrainCalc.subtract();
  bigBrainCalc.minusPlusCheck();
  mathSign.textContent = '-';
});
divide.addEventListener('click', () => {
  result.textContent = bigBrainCalc.divide();
  bigBrainCalc.minusPlusCheck();
  mathSign.textContent = '/';
});
