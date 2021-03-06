//creating variable for form fields, submit button and error messages
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const errFirstName = document.getElementById("errFirstName");
const errLastName = document.getElementById("errLastName");
const errEmail = document.getElementById("errEmail");
const errPassword = document.getElementById("errPassword");

//adding the click event  listener to the submit button
btn.addEventListener('focus', (e) => {
    e.preventDefault;
    //check to see if the FirstName form field is empty then execute code block
    if (firstName.value == '') {
        errFirstName.style.display = 'block';
        errFirstName.style.textAlign = 'right'
        errFirstName.style.fontSize = '10px'
        errFirstName.style.color = 'hsl(0, 100%, 74%)'
        firstName.style.border = '2px solid hsl(0, 100%, 74%)';
        firstName.style.background = 'URL(images/icon-error.svg) right no-repeat';
        firstName.style.backgroundPosition = 'calc(100% - 10px)'
    } else {
        errFirstName.style.display = 'none';
        firstName.style.border = '2px solid rgb(246, 243, 243)';
        firstName.style.background = 'none'
    }
})
btn.addEventListener('focus', (e) => {
    e.preventDefault;
    //check to see if the LastName form field is empty then execute code block
    if (lastName.value == '') {
        errLastName.style.display = 'block';
        errLastName.style.textAlign = 'right'
        errLastName.style.fontSize = '10px'
        errLastName.style.color = 'hsl(0, 100%, 74%)'
        lastName.style.border = '2px solid hsl(0, 100%, 74%)';
        lastName.style.background = 'URL(images/icon-error.svg) right no-repeat'
        lastName.style.backgroundPosition = 'calc(100% - 10px)'
    } else {
        errLastName.style.display = 'none';
        lastName.style.border = '2px solid rgb(246, 243, 243)';
        lastName.style.background = 'none'
    }
})
btn.addEventListener('focus', (e) => {
    e.preventDefault;
    //check to see if the email form field is empty then execute code block
    if (email.value == '' || (email.value.indexOf('@') == -1) || (email.value.indexOf('.com') == -1)) {
        errEmail.style.display = 'block';
        errEmail.style.textAlign = 'right'
        errEmail.style.fontSize = '10px'
        errEmail.style.color = 'hsl(0, 100%, 74%)'
        email.style.border = '2px solid hsl(0, 100%, 74%)';
        email.style.background = 'URL(images/icon-error.svg) right no-repeat'
        email.style.backgroundPosition = 'calc(100% - 10px)'

    } else {
        errEmail.style.display = 'none';
        email.style.border = '2px solid rgb(246, 243, 243)';
        email.style.background = 'none'
    }
})
btn.addEventListener('focus', (e) => {
    e.preventDefault;
    //check to see if the password form field is empty then execute code block
    if (password.value == '') {
        errPassword.style.display = 'block';
        errPassword.style.textAlign = 'right'
        errPassword.style.fontSize = '10px'
        errPassword.style.color = 'hsl(0, 100%, 74%)'
        password.style.border = '2px solid hsl(0, 100%, 74%)';
        password.style.background = 'URL(images/icon-error.svg) right no-repeat'
        password.style.backgroundPosition = 'calc(100% - 10px)'
    } else {
        errPassword.style.display = 'none';
        password.style.border = '2px solid rgb(246, 243, 243)';
        password.style.background = 'none'
    }
})
