
// get all elements
const username = document.querySelector("#Username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm-password");
const form = document.querySelector("#form");
const showError=(input, message) =>{
    let parentElement= input.parentElement;
    parentElement.classList=('form_control error');
    const small= parentElement.querySelector('small');
    const successIcon= parentElement.querySelectorAll('i')[0];
    const errorIcon= parentElement.querySelectorAll('i')[1];
    errorIcon.style.visibility= 'visible';
    successIcon.style.visibility= 'hidden';
    small.innerText= message;

};



// function success
const showSuccess=(input) =>{
    let parentElement= input.parentElement;
    parentElement.classList=('form_control success');
    const small= parentElement.querySelector('small');
    const successIcon= parentElement.querySelectorAll('i')[0];
    const errorIcon= parentElement.querySelectorAll('i')[1];
    errorIcon.style.visibility= 'hidden';
    successIcon.style.visibility= 'visible';

}

// check empty element
const checkEmpty = (elements) =>{
   elements.forEach(element => {
      if(element.value === ''){
       showError(element, 'input required');
      }else{
        showSuccess(element);
      }
   });
}

// check email function using

 const checkEmail= (email) =>{
    const regular= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regular.test(email.value)){
        showSuccess(email);
    }else{
        showError(email, 'invalid email address!')
    }
 };

 // checkpassword function usage

 const checkPasswordLength= (input, min,max) =>{
    if(input.value.length < min){
        showError(input, `password atleast ${min} character`);
    }else if(input.value.length > max){
        showError(input, `password maximum character is ${max}`);
    }else{
        showSuccess(input);
    }
    
 };

 // check passwordmatch if matches

 const checkPasswordMatch = (password, confirm_password) => {
    if (password.value !== confirm_password.value) {
        showError(confirm_password, 'Passwords do not match');
    } else {
        showSuccess(confirm_password);
    }
};


// // events 

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    
   // function holds array of inputs
   checkEmpty([username, email, password, confirm_password]);

   // check email function
   checkEmail(email);

   // checkpassword

   checkPasswordLength(password, 6,10);
   checkPasswordLength(confirm_password,6,10);

   // check password match

   checkPasswordMatch(password, confirm_password);

    // If all inputs are valid, clear the form

    if (form.querySelectorAll('.error').length === 0) {
        form.reset(); // Clears all the form fields
        // Optionally, reset the form styles
        const formControls = form.querySelectorAll('.form_control');
        formControls.forEach(control => {
            control.classList.remove('success', 'error');
        });
    }

});






