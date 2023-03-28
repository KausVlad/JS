'use strict';
const firstNumberState = document.querySelector('.first-number');
const secondNumberState = document.querySelector('.second-number');

const keypad = document.querySelector('.keypad');
const keypadSign = document.querySelector('.keypad-sign');

const result = document.querySelector('.result');
const mathSign = document.querySelector('.math-sign');

const arrayInput = document.querySelector('.array-inp');
const arrayCalc = document.querySelector('.array-calc');

const sum = document.querySelector('.sum');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');

let signState = false;
let singSelect = '';

//! array fox example ['sh', '62', 'glek', 64, -7, undefined, 4, 'grek', true, 84, 42]

function onlyNumberArray() {
  const newArray = [];
  for (const iterator of arrayInput.value.replace(/["'\[\]]/g, '').split(',')) {
    if (!isNaN(parseInt(iterator))) {
      newArray.push(parseInt(iterator));
    }
  }
  return newArray;
}

function maxArrayNumber(array) {
  let max = array[0];
  for (const iterator of array) {
    if (iterator > max) {
      max = iterator;
    }
  }
  return ` |Max number: ${max}| `;
}

function minArrayNumber(array) {
  let min = array[0];
  for (const iterator of array) {
    if (iterator < min) {
      min = iterator;
    }
  }
  return ` |Min number: ${min}| `;
}

function sumArray(array) {
  let sum = 0;
  for (const iterator of array) {
    sum += iterator;
  }
  return ` |Sum Array ${sum}| `;
}

function medianArray(array) {
  let sum = 0;
  for (const iterator of array) {
    sum += iterator;
  }
  return ` |Median ${(sum / array.length).toFixed(2)}| `;
}

arrayCalc.addEventListener('click', () => {
  arrayCalc.textContent =
    minArrayNumber(onlyNumberArray()) +
    maxArrayNumber(onlyNumberArray()) +
    sumArray(onlyNumberArray()) +
    medianArray(onlyNumberArray());
  console.log(arrayInput.value.replace(/["'\[\]]/g, '').split(','));
  console.log(onlyNumberArray());
});

const bigBrainCalc = {
  firstNumber: '',
  secondNumber: '',
  newFirstNumber: null,
  newSecondNumber: null,
  resultNumber: null,
  errorMassage: `NuN`,
  ask() {
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
          : 'not acceptable';
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
  default() {
    firstNumberState.textContent = '';
    secondNumberState.textContent = '';
    result.textContent = '';
    mathSign.textContent = '⁜';
    signState = false;
    singSelect = '';
    this.firstNumber = '';
    this.secondNumber = '';
    this.newFirstNumber = null;
    this.newSecondNumber = null;
    this.resultNumber = null;
    result.textContent = '?';
  },
};

function numPrint(numberX, event, numberState) {
  //! Якщо будете дивитися код, Будь ласка спробуйте цю функцію нище, я хотів уникнути дубльювання, але ця функція чомусь не працює як потрібно, вона виводить тільки одне число. If you look at the code, please try this function below, I wanted to avoid duplication, but for some reason this function does not work as it should, it only outputs one number.
  ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  numberX +=
    numberX.includes(',') && ',' === event.target.textContent
      ? ''
      : event.target.textContent;
  numberState.textContent = numberX;
}

keypad.addEventListener('click', (event) => {
  const { target } = event;
  if (event.target.classList.contains('num') && !signState) {
    // numPrint(bigBrainCalc.firstNumber, event, firstNumberState); //! Мало бути так, але функція не працює коректно. It should be so, but the function does not work correctly
    bigBrainCalc.firstNumber +=
      bigBrainCalc.firstNumber.includes(',') && ',' === event.target.textContent
        ? ''
        : event.target.textContent;
    firstNumberState.textContent = bigBrainCalc.firstNumber;
  } else if (event.target.classList.contains('num') && signState) {
    bigBrainCalc.secondNumber +=
      bigBrainCalc.secondNumber.includes(',') &&
      ',' === event.target.textContent
        ? ''
        : event.target.textContent;
    secondNumberState.textContent = bigBrainCalc.secondNumber;
  }
  if (event.target.classList.contains('button--del')) {
    !signState
      ? ((bigBrainCalc.firstNumber = bigBrainCalc.firstNumber.slice(0, -1)),
        (firstNumberState.textContent = bigBrainCalc.firstNumber))
      : (bigBrainCalc.secondNumber = bigBrainCalc.secondNumber.slice(0, -1)),
      (secondNumberState.textContent = bigBrainCalc.secondNumber);
  }

  // console.log(typeof bigBrainCalc.firstNumber, bigBrainCalc.firstNumber);
});

//! Як уникнути дублювання event.target.classList.contains('...') подібних штук??? How to avoid duplicating event.target.classList.contains('sign') stuff like that???

keypadSign.addEventListener('click', (event) => {
  if (event.target.classList.contains('sign--1')) {
    singSelect = '+';
  } else if (event.target.classList.contains('sign--2')) {
    singSelect = '-';
  } else if (event.target.classList.contains('sign--3')) {
    singSelect = '×';
  } else if (event.target.classList.contains('sign--4')) {
    singSelect = '÷';
  }
  signState = true;
  mathSign.textContent = singSelect;

  // console.log(singSelect);
  if (event.target.classList.contains('sign--5')) {
    bigBrainCalc.ask();
    if (singSelect === '+') {
      result.textContent = bigBrainCalc.sum();
    } else if (singSelect === '-') {
      result.textContent = bigBrainCalc.subtract();
    } else if (singSelect === '÷') {
      result.textContent = bigBrainCalc.divide();
    } else if (singSelect === '×') {
      result.textContent = bigBrainCalc.mul();
    } else {
      alert('invalid operation');
    }
    bigBrainCalc.minusPlusCheck();
  }
  if (event.target.classList.contains('sign--6')) {
    bigBrainCalc.default();
  }
});
