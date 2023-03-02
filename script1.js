'use strict';

const xArray = ['sheeeeesh', 62, 'glek', 64, -7, 4, 'grek', true, 84, 42];

let xArraySum = 0;
let xArrayMin, xArrayMax;

for (const item of xArray) {
  if (typeof item === 'number') {
    xArrayMin = item;
    xArrayMax = item;
    break;
  }
}

for (const iterator of xArray) {
  if (typeof iterator === 'number') {
    xArraySum += iterator;

    if (iterator > xArrayMax) {
      xArrayMax = iterator;
    }
    if (iterator < xArrayMin) {
      xArrayMin = iterator;
    }
  }
}
console.log(xArray);
console.log(`Array sum ${xArraySum}, min ${xArrayMin}, max ${xArrayMax}`);

let y = '';
for (let index = 0; index < 5; index++) {
  y += '#';
  console.log(y);
}
