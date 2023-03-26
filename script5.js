'use strict';

let defaultNumber = +prompt('enter a number');
console.log(defaultNumber);

function Accumulator(number) {
  this.number = number;
  this.increment = function () {
    console.log((this.number += 1));
  };
  this.decrement = function () {
    console.log((this.number -= 1));
  };
}

const accumulator = new Accumulator(defaultNumber);

function incrementB() {
  accumulator.increment();
}

function decrementB() {
  accumulator.decrement();
}

function CancelableAccumulator() {
  Accumulator.call(this, defaultNumber);
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);

CancelableAccumulator.prototype.clear = function () {
  this.number = defaultNumber;
  console.log(this.number);
};

const accumulator2 = new CancelableAccumulator(defaultNumber);

function incrementB2() {
  accumulator2.increment();
}

function decrementB2() {
  accumulator2.decrement();
}

function clearB2() {
  accumulator2.clear();
}
