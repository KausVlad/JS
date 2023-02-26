'use strict';
let firstNumber;
let secondNumber;

firstNumber = prompt('Enter first number');
secondNumber = prompt('Enter second number');

let sum = Number(firstNumber) + Number(secondNumber);
let subtract = Number(firstNumber) - Number(secondNumber);
let multiple = Number(firstNumber) * Number(secondNumber);
let divide = Number(firstNumber) / Number(secondNumber);
alert(
  `sum: ${sum}, subtract: ${subtract}, multiple: ${multiple}, divide: ${divide}`
);
