const add = document.getElementById("add");
const min = document.getElementById("min");
const number = document.getElementById("number");

number.innerHTML = 0;

function increment() {
  let currentNumber = parseInt(number.innerHTML);
  currentNumber += 1;
  number.innerHTML = currentNumber;
}

function decrement() {
  let currentNumber = parseInt(number.innerHTML);
  if (currentNumber > 0) {
    currentNumber -= 1;
    number.innerHTML = currentNumber;
  }
}
