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
    // fetching our small element from our form-control parent.
    const errorMessage = formControl.querySelector('small');
    errorMessage.textContent = message;
}

//show success message 
function showSuccess(input){
    formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// we will use a reg ex method to evaluate a passpord to make sure it meets certain criteria
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// function to ensure all fields have values 
function checkRequired(inputArr){
    inputArr.forEach((input)=>{
        if(input.value.trim() === ""){
            showError(input, `${getFieldName(input)} is required`);
        }else {
            showSuccess(input);
        }
    })
}

// function  to get our input id name and transform its first letter to upper case which would then be pass in the error message
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// function  to check if both passwords match
function checkMatch(input1, input2){
    if(input1.value !== input2.value) {
        showError(password2, 'passwords do not match');
    }
}

//function  to validate field length
function checkLength(input, min, max){
    if(input.value.length < min || input.value.length > max){
        showError(input, `${getFieldName(input)} must be between ${min} and ${max} characters`);
    } else{
        showSuccess(input);
    }
}

//function  to validate email
function validateEmailChar(email){
    if(!validateEmail(email.value)){
        showError(email, 'email is invalid');
    } else {
        showSuccess(email);
    }
}

//Event listeners 
form.addEventListener('submit', function(e){
    e.preventDefault();checkRequired([username, email,  password, password2]);  
    checkLength(username, 3, 15); 
    checkLength(password, 6, 25); 
    validateEmailChar(email);  
    checkMatch(password, password2);
})