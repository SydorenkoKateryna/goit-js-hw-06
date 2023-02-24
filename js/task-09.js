function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;

const changeColorButton = document.querySelector(".change-color");

const colorValue = document.querySelector(".color");

function onChangeColorButtonClick() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
}

changeColorButton.addEventListener("click", onChangeColorButtonClick);
