const counterDecrementButton = document.querySelector('[data-action="decrement"]');
const counterIncrementButton = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('span#value');

let counterValue = 0;

counterIncrementButton.addEventListener('click', onIncrementButtonclick);
counterDecrementButton.addEventListener('click', onDecrementButtonclick);

function onIncrementButtonclick() {
    counterValue += 1;
    counter.textContent = counterValue;
};

function onDecrementButtonclick() {
    counterValue -= 1;
    counter.textContent = counterValue;
};