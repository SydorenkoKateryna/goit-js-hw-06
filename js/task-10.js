function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls > input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

let boxWidth = 30;
let boxHeight = 30;

function onInputChange(event) {
  input.dataset.amount = event.currentTarget.value;
}

function createBoxes() {
  const boxes = [];

  for (let i = 0; i < input.dataset.amount; i += 1) {
    const boxEl = document.createElement("div");

    boxEl.style.width = `${boxWidth}px`;
    boxEl.style.height = `${boxHeight}px`;
    boxEl.style.backgroundColor = getRandomHexColor();

    boxes.push(boxEl);

    boxWidth += 10;
    boxHeight += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxWidth = 30;
  boxHeight = 30;
  boxesContainer.textContent = "";
  input.value = "";
  input.dataset.amount = "";
}

input.addEventListener("input", onInputChange);
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
