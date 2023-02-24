const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function onInputChange(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}

input.addEventListener("input", onInputChange);
