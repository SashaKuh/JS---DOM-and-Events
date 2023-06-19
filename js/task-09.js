function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyStyle = document.querySelector('body').style;
const buttonChangeColor = document.querySelector('button.change-color');
const textColor = document.querySelector('span.color');

buttonChangeColor.addEventListener('click', onChangeColor);

function onChangeColor(){
  const color = getRandomHexColor();
  bodyStyle.backgroundColor = color;
  textColor.textContent = color;
}