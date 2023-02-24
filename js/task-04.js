let counterValue = 0;

const decrementButton = document.querySelector("button[data-action=decrement]");
const incrementButton = document.querySelector("button[data-action=increment]");
const value = document.querySelector("#value");

function onButtonDecrementClick() {
  counterValue -= 1;
  console.log(counterValue);

  value.textContent = counterValue;
}

function onButtonIncrementClick() {
  counterValue += 1;
  console.log(counterValue);

  value.textContent = counterValue;
}

decrementButton.addEventListener("click", onButtonDecrementClick);
incrementButton.addEventListener("click", onButtonIncrementClick);
