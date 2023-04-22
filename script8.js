Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};
Array.prototype.pow = function (n) {
  return this.map((a) => a ** n);
};

const arr = [1, 2, 3, 4, 5];

console.log(arr.pow(2));

function a() {
  console.log('test');
}

a.defer(4000);
