function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 1; i <= amount; i++) {
    boxes.push(
      `<div style="width: ${30 + 10 * i}px;
      height: ${30 + 10 * i}px;
      background-color: ${getRandomHexColor()}"></div>`
    );
  }
  boxesContainer.insertAdjacentHTML('beforeend', boxes.join(''));
}

const boxesContainer = document.querySelector('div#boxes');
const inputNumbers = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');

buttonCreate.addEventListener('click', onButtonCreate);
buttonDestroy.addEventListener('click', onButtonDestroy);

function onButtonCreate() {
  createBoxes(Number(inputNumbers.value));
}

function onButtonDestroy() {
  boxesContainer.innerHTML = '';
  inputNumbers.value = '';
}
