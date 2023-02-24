const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const onInputChange = (event) =>
  (outputName.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value);

inputName.addEventListener("input", onInputChange);
