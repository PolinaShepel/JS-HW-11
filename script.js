const form = document.querySelector('.password-form');
const btn = document.querySelector('.btn');


form.addEventListener('click', (event) => {

    if (!event.target.classList.contains('fas')) {
        return;
    }

    const icon = event.target;
    icon.classList.toggle('fa-eye-slash');
    icon.classList.toggle('fa-eye');

    const input = icon.closest('.input-wrapper').querySelector('.input-text');

    if (icon.classList.contains('fa-eye-slash')) {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
});

const error = document.createElement('span');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = event.currentTarget.querySelectorAll('.input-text');

    if (!inputs[0].value && !inputs[1].value) {
        alert('Заповніть поля!')
    }

    else if (inputs[0].value === inputs[1].value) {
        error.remove();
        alert('You are welcome');
    }

    else {
        error.style.color = 'red';
        error.innerHTML = 'Паролі не співпадають';
        btn.insertAdjacentElement('beforebegin', errorMsg);

    }
});