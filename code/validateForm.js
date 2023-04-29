// const name = document.getElementById("name");
// const phone = document.getElementById("phone");
// const email = document.getElementById("email");

// // Get the error message containers
// const nameError = document.querySelector(".name-error");
// const phoneError = document.querySelector(".phone-error");
// const emailError = document.querySelector(".email-error");

// // Set up a regular expression pattern for phone numbers
// const phonePattern = /^\+?\d{1,3}[\s.-]?\d{2,4}[\s.-]?\d{3,4}[\s.-]?\d{3,4}$/;

// // Reset error messages
// nameError.textContent = "";
// phoneError.textContent = "";
// emailError.textContent = "";

// let formButton = document.querySelector(".button-form");

// function validateForm() {
//   // Get the input fields

//   // Check if the name field is empty
//   if (name.value.trim() === "") {
//     nameError.textContent = "Bitte geben Sie Ihren Namen ein";
//     name.classList.add("error-input");
//     formButton.disabled = true;
//     formButton.classList.add("disabled");
//     return false;
//   } else {
//     nameError.textContent = "";
//     name.classList.remove("error-input");
//     checkFormValidity();
//   }

//   // Check if the phone field is empty
//   if (phone.value.trim() === "") {
//     phoneError.textContent = "Bitte geben sie ihre Telefonnummer ein";
//     phone.classList.add("error-input");
//     formButton.disabled = true;
//     formButton.classList.add("disabled");
//     return false;
//   } else {
//     phoneError.textContent = "";
//     phone.classList.remove("error-input");
//     checkFormValidity();
//   }

//   // Check if the phone number matches the pattern
//   if (!phonePattern.test(phone.value.trim())) {
//     phoneError.textContent = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
//     formButton.disabled = true;
//     formButton.classList.add("disabled");
//     return false;
//   } else {
//     phoneError.textContent = "";
//     phone.classList.remove("error-input");
//     checkFormValidity();
//   }

//   // Check if the email field is empty
//   if (email.value.trim() === "") {
//     emailError.textContent = "Geben Sie bitte Ihre Email-Adresse ein";
//     formButton.disabled = true;
//     formButton.classList.add("disabled");
//     return false;
//   } else {
//     emailError.textContent = "";
//     email.classList.remove("error-input");
//     checkFormValidity();
//   }

//   // Check if the email address is valid
//   if (!isValidEmail(email.value.trim())) {
//     emailError.textContent = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
//     formButton.disabled = true;
//     formButton.classList.add("disabled");
//     return false;
//   } else {
//     emailError.textContent = "";
//     email.classList.remove("error-input");
//     checkFormValidity();
//   }

//   // If all the fields are valid, submit the form
//   formButton.disabled = false;
//   formButton.classList.remove("disabled");

//   return true;
// }

// // Add event listeners to the input fields

// name.addEventListener("input", validateForm);
// phone.addEventListener("input", validateForm);
// email.addEventListener("input", validateForm);

// function checkFormValidity() {
//   if (name.validity.valid && phone.validity.valid && email.validity.valid) {
//     formButton.disabled = false;
//     formButton.classList.remove("disabled");
//   }
// }

// function validateFormPop() {
//   // Get the input fields
//   const namePop = document.querySelector("#namePop");
//   const phonePop = document.querySelector("#phonePop");
//   const emailPop = document.querySelector("#emailPop");
//   const formButtonPop = document.querySelector(".button-form-pop");
//   const nameErrorPop = document.querySelector(".name-error-pop");
//   const phoneErrorPop = document.querySelector(".phone-error-pop");
//   const emailErrorPop = document.querySelector(".email-error-pop");

//   // Check if the name field is empty
//   if (namePop.value.trim() === "") {
//     nameErrorPop.textContent = "Bitte geben Sie Ihren Namen ein";
//     namePop.classList.add("error-input-pop");
//     formButtonPop.disabled = true;
//     formButtonPop.classList.add("disabled");
//     return false;
//   } else {
//     nameErrorPop.textContent = "";
//     namePop.classList.remove("error-input");
//     checkFormValidityPop();
//   }

//   // Check if the phone field is empty
//   if (phonePop.value.trim() === "") {
//     phoneErrorPop.textContent = "Bitte geben sie ihre Telefonnummer ein";
//     phonePop.classList.add("error-input-pop");
//     formButtonPop.disabled = true;
//     formButtonPop.classList.add("disabled");
//     return false;
//   } else {
//     phoneErrorPop.textContent = "";
//     phonePop.classList.remove("error-input-pop");
//     checkFormValidityPop();
//   }

//   // Check if the phone number matches the pattern
//   if (!phonePattern.test(phonePop.value.trim())) {
//     phoneErrorPop.textContent =
//       "Bitte geben Sie eine gültige Telefonnummer ein";
//     formButtonPop.disabled = true;
//     formButtonPop.classList.add("disabled");
//     return false;
//   } else {
//     phoneErrorPop.textContent = "";
//     phonePop.classList.remove("error-input-pop");
//     checkFormValidityPop();
//   }

//   // Check if the email field is empty
//   if (emailPop.value.trim() === "") {
//     emailErrorPop.textContent = "Geben Sie bitte Ihre Email-Adresse ein";
//     formButtonPop.disabled = true;
//     formButtonPop.classList.add("disabled");
//     return false;
//   } else {
//     emailErrorPop.textContent = "";
//     emailPop.classList.remove("error-input-pop");
//     checkFormValidityPop();
//   }

//   // Check if the email address is valid
//   if (!isValidEmailPop(emailPop.value.trim())) {
//     emailErrorPop.textContent =
//       "Bitte geben Sie eine gültige E-Mail-Adresse ein";
//     formButtonPop.disabled = true;
//     formButtonPop.classList.add("disabled");
//     return false;
//   } else {
//     emailErrorPop.textContent = "";
//     emailPop.classList.remove("error-input-pop");
//     checkFormValidityPop();
//   }

//   // If all the fields are valid, submit the form
//   formButtonPop.disabled = false;
//   formButtonPop.classList.remove("disabled");

//   return true;
// }

// // Add event listeners to the input fields
// const namePop = document.querySelector("#namePop");
// const phonePop = document.querySelector("#phonePop");
// const emailPop = document.querySelector("#emailPop");
// const formButtonPop = document.querySelector(".button-form-pop");

// namePop.addEventListener("input", validateFormPop);
// phonePop.addEventListener("input", validateFormPop);
// emailPop.addEventListener("input", validateFormPop);

// function checkFormValidityPop() {
//   if (
//     namePop.validity.valid &&
//     phonePop.validity.valid &&
//     emailPop.validity.valid
//   ) {
//     formButtonPop.disabled = false;
//     formButtonPop.classList.remove("disabled");
//   }
// }

  // код, що модифікує DOM, включаючи innerHTML

function validateForm(event) {
  event.preventDefault();
  const form = event.target;
  const inputs = form.querySelectorAll('.input:not(.ignore)'); // Виключаємо елементи з класом ignore
  const errors = form.querySelectorAll('.error');
  let isValid = true;

  

  // Clear all error messages and enable submit button
  errors.forEach((error) => {
    error.innerHTML = '';
    error.classList.remove('active');
  });
  const submitButton = form.querySelector('.form-submit-btn');

  // Check each input field
  inputs.forEach((input) => {
    const value = input.value.trim();
    const name = input.name;
    const error = form.querySelector(`.${name}-error`);
  
    if (value === '') {
      error.innerHTML = `Das Feld '${name}' darf nicht leer sein.`;
      error.classList.add('active');
      isValid = false;
    } else if (name === 'email' && !isValidEmail(value)) {
      error.innerHTML = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
      error.classList.add('active');
      isValid = false;
    } else if (name === 'phone' && !isValidPhoneNumber(value)) {
      error.innerHTML = 'Bitte geben Sie eine gültige Telefonnummer ein.';
      error.classList.add('active');
      isValid = false;
    } else {
      error.innerHTML = '';
      error.classList.remove('active');
      const submitButton = form.querySelector('.form-submit-btn');
      submitButton.classList.remove('disabled');
      submitButton.removeAttribute('disabled');
    }
  
    input.addEventListener('input', () => {
      const value = input.value.trim();
      const error = form.querySelector(`.${name}-error`);
  
      if (value === '') {
        error.innerHTML = `Das Feld '${name}' darf nicht leer sein.`;
        error.classList.add('active');
        isValid = false;
      } else if (name === 'email' && !isValidEmail(value)) {
        error.innerHTML = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        error.classList.add('active');
        isValid = false;
      } else if (name === 'phone' && !isValidPhoneNumber(value)) {
        error.innerHTML = 'Bitte geben Sie eine gültige Telefonnummer ein.';
        error.classList.add('active');
        isValid = false;
      } else {
        error.innerHTML = '';
        error.classList.remove('active');
        const submitButton = form.querySelector('.form-submit-btn');
        submitButton.classList.remove('disabled');
        submitButton.removeAttribute('disabled');
      }
    });
  });

  if (isValid) {
    // Enable submit button and submit form
    submitButton.classList.remove('disabled');
    submitButton.removeAttribute('disabled');
    form.submit();
  } else {
    // Disable submit button
    submitButton.classList.add('disabled');
    submitButton.setAttribute('disabled', true);
  }

  return false;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
  const phoneRegex = /^\+?\d{1,3}[\s.-]?\(?\d{2,3}\)?[\s.-]?\d{2,4}[\s.-]?\d{2,4}$/;
  return phoneRegex.test(phone);
}
