'use strict';
let firstNumber, secondNumber;

firstNumber = prompt('Enter first number');
secondNumber = prompt('Enter second number');
// console.log(firstNumber, secondNumber);

function numberChecking(x, y) {
  return x === '' || y === '' || isNaN(Number(x + y)) || firstNumber === null
    ? false
    : true;
}
// console.log(numberChecking(firstNumber, secondNumber));
// console.log(typeof firstNumber, firstNumber, typeof secondNumber, secondNumber);

function sum(x, y) {
  if (numberChecking(x, y)) {
    return `sum: ${Number(x) + Number(y)}`;
  }
  return `It is possible that one or two values are not a number, BB and GG!! Press F to pay respect!!`;
}

function subtract(x, y) {
  if (numberChecking(x, y)) {
    if (Number(x) < Number(y)) {
      return confirm('are you sure about that?')
        ? `result of subtraction: ${Number(x) - Number(y)}, you are tuff guy`
        : 'the result will be less than 0 and not acceptable to you';
    } else {
      return `result of subtraction: ${Number(x) - Number(y)}`;
    }
  }
  return `It is possible that one or two values are not a number, BB and GG!! Press F to pay respect!!`;
}

function divide(x, y) {
  if (numberChecking(x, y)) {
    return Number(y) === 0
      ? 'cannot be divided by zero'
      : `the result of dividing: ${Number(x) / Number(y)}`;
  }
  return `It is possible that one or two values are not a number, BB and GG!! Press F to pay respect!!`;
}

function multiplying(x, y) {
  if (numberChecking(x, y)) {
    return `the result of multiplying: ${Number(x) * Number(y)}`;
  }
  return `It is possible that one or two values are not a number, BB and GG!! Press F to pay respect!!`;
}

function mathSelector(x, y) {
  const operationType = prompt('Enter operation type: +, -, *, /');

  if (operationType === '+') {
    return sum(x, y);
  }
  if (operationType === '-') {
    return subtract(x, y);
  }
  if (operationType === '/') {
    return divide(x, y);
  }
  if (operationType === '*') {
    return multiplying(x, y);
  }
}
alert(mathSelector(firstNumber, secondNumber));
// console.log(multiplying(firstNumber, secondNumber));
