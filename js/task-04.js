const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const spanValue = document.querySelector("#value");
let counterValue = 0;

buttonDecrement.addEventListener("click", onButtonDecrementClick);
buttonIncrement.addEventListener("click", onButtonIncrementClick);

function onButtonIncrementClick() {
  counterValue += 1;
  spanValue.textContent = counterValue;
}

function onButtonDecrementClick() {
  counterValue -= 1;
  spanValue.textContent = counterValue;
}
