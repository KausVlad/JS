'use strict';

const xArray = ['sh', '62', 'glek', 64, -7, undefined, 4, 'grek', true, 84, 42];
const ss = [1, 2, 4, 1];

function onlyNumberArray(array) {
  const newArray = [];
  for (const iterator of array) {
    if (!isNaN(parseInt(iterator))) {
      newArray.push(parseInt(iterator));
    }
  }
  return newArray;
}

console.log(onlyNumberArray(xArray));

function maxArrayNumber(array) {
  let max = array[0];
  for (const iterator of array) {
    if (iterator > max) {
      max = iterator;
    }
  }
  return ` |max array number: ${max}| `;
}

function minArrayNumber(array) {
  let min = array[0];
  for (const iterator of array) {
    if (iterator < min) {
      min = iterator;
    }
  }
  return ` |min array number: ${min}| `;
}

function sumArray(array) {
  let sum = 0;
  for (const iterator of array) {
    sum += iterator;
  }
  return ` |Sum of array ${sum}| `;
}

function medianArray(array) {
  let sum = 0;
  for (const iterator of array) {
    sum += iterator;
  }
  return ` |Median of array ${sum / array.length}| `;
}

console.log(
  maxArrayNumber(onlyNumberArray(xArray)),
  minArrayNumber(onlyNumberArray(xArray)),
  sumArray(onlyNumberArray(xArray)),
  medianArray(onlyNumberArray(xArray))
);
