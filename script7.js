'use strict';
const timeLeft = document.getElementById('time-left');

const day2ndYear = new Date(1708738800000); //субота, 24 лютого 2024 р., 03:40:00 GMT+02:00

const interval = setInterval(() => {
  let millisecondLeft = day2ndYear - Date.now();
  let days = Math.floor(millisecondLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (millisecondLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((millisecondLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((millisecondLeft % (1000 * 60)) / 1000);
  timeLeft.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  if (millisecondLeft < 0) {
    clearInterval(interval);
    timeLeft.textContent =
      'If you are reading this, then unfortunately the war did not end in year 2 😢 😥';
  }
}, 1000);
