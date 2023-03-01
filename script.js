'use strict';
let firstNumber, secondNumber;

firstNumber = prompt('Enter first number');
secondNumber = prompt('Enter second number');
console.log(firstNumber, secondNumber);

if ((firstNumber && secondNumber) !== '') {
  alert(`sum: ${Number(firstNumber) + Number(secondNumber)}`);

  if (Number(firstNumber) < Number(secondNumber)) {
    if (confirm('are you sure about that?')) {
      alert(Number(firstNumber) - Number(secondNumber));
    }
  }

  alert(
    `the result of multiplying: ${Number(firstNumber) * Number(secondNumber)}`
  );
  if (Number(secondNumber) === 0) {
    alert('second number must be not a 0');
  } else {
    alert(
      `the result of dividing: ${Number(firstNumber) / Number(secondNumber)}`
    );
  }
} else {
  alert(`I don't see 2 values, BB and GG!! Press F to pay respect!!`);
}
