const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
console.log(input.value);
span.style.fontSize = `${input.value}px`;
input.addEventListener("input", onTargetInput);

function onTargetInput(evt) {
  span.style.fontSize = `${evt.currentTarget.value}px`;
}
