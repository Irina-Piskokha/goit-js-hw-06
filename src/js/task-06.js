const input = document.querySelector("#validation-input");
console.log(input.dataset.length);
input.addEventListener("blur", onTargetInputBlur);

function onTargetInputBlur(evt) {
  if (evt.currentTarget.value.length === +input.dataset.length) {
    evt.currentTarget.classList.add("valid");
    evt.currentTarget.classList.remove("invalid");
  } else {
    evt.currentTarget.classList.add("invalid");
    evt.currentTarget.classList.remove("valid");
  }
}
