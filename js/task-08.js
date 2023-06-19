const form = document.querySelector('form.login-form');
const formData = {};

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (email.value && password.value) {
        formData.email = email.value;
        formData.password = password.value;
        console.log(formData);
        event.currentTarget.reset();
    } else {
        window.alert('Заповніть всі поля!')
    }
}