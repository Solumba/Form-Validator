//simple form validation using if statements 
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show error message 
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const errorMessage = formControl.querySelector('small');
    errorMessage.textContent = message;
}

//show success message 
function showSuccess(input){
    formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// we will use a reg ex method to evaluate a passpord to make sure it meets certain criteria
const re = 
//Event listeners 
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value === ''){
        showError(username, 'username is required');
    } else {
        showSuccess(username);
    }
    if(email.value === ''){
        showError(email, 'email is required');
    } else {
        showSuccess(email);
    }
    if(password.value === ''){
        showError(password, 'password is required');
    } else {
        showSuccess(password);
    }
    if(password2.value === ''){
        showError(password2, 'please confirm password');
    } else {
        showSuccess(password2);
    }
})