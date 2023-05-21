
function validateForm(event) {
  event.preventDefault();
  const form = event.target;
  const inputs = form.querySelectorAll('.input:not(.ignore)');
  const errors = form.querySelectorAll('.error');
  let isValid = true;


  errors.forEach((error) => {
    error.innerHTML = '';
    error.classList.remove('active');
  });
  const submitButton = form.querySelector('.form-submit-btn');


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

    submitButton.classList.remove('disabled');
    submitButton.removeAttribute('disabled');
    form.submit();
  } else {

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
