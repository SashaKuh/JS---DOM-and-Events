const input = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

text.style.fontSize = `${input.value}px`;

input.addEventListener('input', onInputChange);

function onInputChange() {
  text.style.fontSize = `${input.value}px`;
}
