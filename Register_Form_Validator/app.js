const form = document.querySelector('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')

function showError(input, message) {
    const formControl = input.parentElement
    const messageError = formControl.querySelector('small')
    formControl.className = 'form-control error'
    messageError.innerText = message
}

function showSuccess(input) {
    const formControl = input.parentElement
    const messageError = formControl.querySelector('small')
    formControl.className = 'form-control success'
    messageError.innerText = ''
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkRequired(arrInputs) {
    let isRequired = false
    arrInputs.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
            isRequired = true
        } else {
            showSuccess(input)
        }
    });

    return isRequired
}

function checkEmail(inputEmail) {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(inputEmail.value.trim())) {
        showError(inputEmail, 'Email is not valid')
    } else {
        showSuccess(inputEmail)
    }
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input)
    }
}

function checkPasswordsMatch(inputPassword1, inputPassword2) {
    if (inputPassword1.value !== inputPassword2.value) {
        showError(inputPassword2, `${getFieldName(inputPassword2)} do not match`)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkRequired([username, email, password, confirmPassword])
    if (email.value !== '') {
        checkEmail(email)
    } else if (username.value !== '') {
        checkLength(username, 5, 20)
    } else if (password.value !== '') {
        checkLength(password, 8, 15)
    } else if (confirmPassword.value !== '') {
        checkPasswordsMatch(password, confirmPassword)
    } else {
        document.querySelector('button').addEventListener('click', function () {
            alert('Dương đẹp trai!');
        });
    }
})