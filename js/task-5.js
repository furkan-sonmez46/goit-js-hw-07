function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const button = document.querySelector('.change-color');
const bodyColor = document.querySelector("span.color");

function setRandomHexColor() {
  const randomHexColor = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = `${randomHexColor}`;

  bodyColor.textContent = `${randomHexColor}`;
}

button.addEventListener('click', setRandomHexColor);

