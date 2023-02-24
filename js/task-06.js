const input = document.querySelector("#validation-input");
const symbolsNumber = Number(input.dataset.length);

function onInputChange(event) {
  if (event.currentTarget.value.length === symbolsNumber) {
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
    input.classList.add("valid");
  } else {
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
    input.classList.add("invalid");
  }
}

input.addEventListener("blur", onInputChange);
