const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim();

    if (usernameValue.length < 8) {
        setError(username, '*username is too short');
    } else {
        setSuccess(username);
    }

    if (!isValidEmail(emailValue)) {
        setError(email, '* provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (!isValidPassword(passwordValue)) {
        setError(password, '* minimum 8 characters, one Uppercase lowercase digit & special char');
    } else {
        setSuccess(password);
    }

    if (cPasswordValue !== passwordValue) {
        setError(cPassword, "* password doesn't match");
    } else {
        setSuccess(cPassword);
    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isValidEmail(e) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(e);
}

function isValidPassword(e) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordPattern.test(e);
}

// Clear input function
function clearInput(inputId) {
    const inputField = document.getElementById(inputId);
    inputField.value = '';
    const parent = inputField.parentElement;
    parent.classList.remove('error', 'success');
    const errorDisplay = parent.querySelector('.error');
    errorDisplay.innerText = '';
}
