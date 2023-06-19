const input = document.querySelector('input#validation-input');

input.addEventListener('blur', onInputChange);

function onInputChange(event){
    const COUNT_NUMBER = Number(event.currentTarget.dataset.length);
    const value = event.currentTarget.value.length;
    if (value === COUNT_NUMBER){
        input.className = 'valid'
    } else {
        input.className = 'invalid'
    }
}