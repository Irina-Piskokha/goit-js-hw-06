const input = document.querySelector("#name-input");
const out = document.querySelector("#name-output");

input.addEventListener("input", onTargetInput);

function onTargetInput(evt) {
  out.textContent = evt.currentTarget.value || "Anonimous";
  // if (evt.currentTarget.value === "") {
  //   out.textContent = "Anonimous";
  // } else {
  //   out.textContent = input.value;
  // }
}
