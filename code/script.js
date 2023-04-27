const btn = document.getElementById("myBtn");
btn.addEventListener("click", function() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Weiterlesen";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Aufrollen";
    moreText.style.display = "inline";
  }
});
console.log(btn)

let popup = document.getElementById("popup");
let closeButton = document.getElementById("close-button");
let body = document.getElementsByTagName("body")[0];

function showPopup() {
  popup.style.display = "block";
  body.classList.add("popup-open");
}

function hidePopup() {
  popup.style.display = "none";
  body.classList.remove("popup-open");
}

closeButton.onclick = hidePopup;
const element = document.querySelector(".js-choice");
const choices = new Choices(element, {
  searchEnabled: false,
  })

const anim = lottie;
anim.loadAnimation ({
    container: document.querySelector('#lottie_1'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: './animation/prana_02.json'
})
anim.loadAnimation ({
    container: document.querySelector('#lottie_2'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: './animation/01.json'
})
anim.loadAnimation ({
    container: document.querySelector('#lottie_6'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: './animation/Musse_002.json'
})
anim.loadAnimation ({
    container: document.querySelector('#lottie_3'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: './animation/data.json'
})
anim.loadAnimation ({
    container: document.querySelector('#lottie_9'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: './animation/sota_001.json'
})




    var swiper = new Swiper(".mySwiper_1", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    disabledClass: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        540: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is <= 640px
        800: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
  });
  var swiper = new Swiper(".mySwiper_2", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup:1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
  });
  const categorySelect = document.querySelector('#project-category');
  const contentBoxes = document.querySelectorAll('.content-box');
  
  categorySelect.addEventListener('change', () => {
    const selectedCategory = categorySelect.value;

    contentBoxes.forEach(box => box.classList.remove('active'));

    const selectedBox = document.querySelector(`#${selectedCategory}`);
    selectedBox.classList.add('active');
  });
  
  
  
  
  
  
  const tabs = document.querySelectorAll('.tab-btn');
  const content = document.querySelectorAll('.content-box');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click',(e)=>{
        tabs.forEach(tab =>{
            tab.classList.remove('active')
        })
        tab.classList.add('active');
        var line = document.querySelector(".line");
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";
        
        content.forEach(tab =>{
            tab.classList.remove('active')
        })
       content[index].classList.add('active')
    })
  })

  document.addEventListener("click", documentClick);

function documentClick(e){
    const targetItem = e.target;
    if (targetItem.closest('.burger')) {
        document.body.classList.toggle('burger-open');
    }
}
// function validation(form) {
//   const allInputs = form.querySelectorAll('input');

//   form.querySelectorAll('input').forEach(input => {
//     if (input.value == "") {
//       console.log('Fehler')
//     }
//   } )
// }

// document.getElementById("form").addEventListener("submit", function(event){
//   event.preventDefault();

//   if (validation(this)=== true) {
//     console.log("ok")
//   }

// })

const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

// Get the error message containers
const nameError = document.querySelector('.name-error');
const phoneError = document.querySelector('.phone-error');
const emailError = document.querySelector('.email-error');

// Set up a regular expression pattern for phone numbers
const phonePattern = /^\+?\d{1,3}[\s.-]?\d{2,4}[\s.-]?\d{3,4}[\s.-]?\d{3,4}$/;

// Reset error messages
nameError.textContent = '';
phoneError.textContent = '';
emailError.textContent = '';

let formButton = document.querySelector('.button-form');

function validateForm() {
  // Get the input fields


  // Check if the name field is empty
  if (name.value.trim() === '') {
    nameError.textContent = 'Bitte geben Sie Ihren Namen ein';
    name.classList.add("error-input");
    formButton.disabled = true;
    formButton.classList.add("disabled");
    return false;

  } else {
    nameError.textContent = '';
    name.classList.remove("error-input");
    checkFormValidity()
  }

  // Check if the phone field is empty
  if (phone.value.trim() === '') {
    phoneError.textContent = 'Bitte geben sie ihre Telefonnummer ein';
    phone.classList.add("error-input");
    formButton.disabled = true;
    formButton.classList.add("disabled");
    return false;
  } else {
    phoneError.textContent = '';
    phone.classList.remove("error-input");
    checkFormValidity()
  }

  // Check if the phone number matches the pattern
  if (!phonePattern.test(phone.value.trim())) {
    phoneError.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    formButton.disabled = true;
    formButton.classList.add("disabled");
    return false;
  } else {
    phoneError.textContent = '';
    phone.classList.remove("error-input");
    checkFormValidity()
  }

  // Check if the email field is empty
  if (email.value.trim() === '') {
    emailError.textContent = 'Geben Sie bitte Ihre Email-Adresse ein';
    formButton.disabled = true;
    formButton.classList.add("disabled");
    return false;
  } else {
    emailError.textContent = '';
    email.classList.remove("error-input");
    checkFormValidity()
  }

  // Check if the email address is valid
  if (!isValidEmail(email.value.trim())) {
    emailError.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    formButton.disabled = true;
    formButton.classList.add("disabled");
    return false;
  } else {
    emailError.textContent = '';
    email.classList.remove("error-input");
    checkFormValidity()
  }
 
  // If all the fields are valid, submit the form
  formButton.disabled = false;
  formButton.classList.remove("disabled");


  return true;

}


// Add event listeners to the input fields


name.addEventListener('input', validateForm);
phone.addEventListener('input', validateForm);
email.addEventListener('input', validateForm);

function checkFormValidity() {
  if (name.validity.valid && phone.validity.valid && email.validity.valid) {
    formButton.disabled = false;
    formButton.classList.remove("disabled");
  }
}

// const namePop = document.getElementById('name-pop');
// const phonePop = document.getElementById('phone-pop');
// const emailPop = document.getElementById('email-pop');

// const nameErrorPop = document.querySelector('.name-error-pop');
// const phoneErrorPop = document.querySelector('.phone-error-pop');
// const emailErrorPop = document.querySelector('.email-error-pop');

// nameErrorPop.textContent = '';
// phoneErrorPop.textContent = '';
// emailErrorPop.textContent = '';
// let formButtonPop = document.querySelector('.button-form-pop');

// function validateFormPop() {
//   // Get the input fields


//   // Check if the name field is empty
//   if (namePop.value.trim() === '') {
//     nameErrorPop.textContent = 'Bitte geben Sie Ihren Namen ein';
//     namePop.classList.add("error-input");
//     formButtonPop.disabled = true;
//     formButtonPop.classList.add("disabled");
//     return false;

//   } else {
//     nameErrorPop.textContent = '';
//     namePop.classList.remove("error-input");
//     checkFormValidityPop()
//   }

//   // Check if the phone field is empty
//   if (phonePop.value.trim() === '') {
//     phoneErrorPop.textContent = 'Bitte geben sie ihre Telefonnummer ein';
//     phonePop.classList.add("error-input-pop");
//     formButtonPop.disabled = true;
//     formButtonPop.classList.add("disabled");
//     return false;
//   } else {
//     phoneError.textContent = '';
//     phone.classList.remove("error-input-pop");
//     checkFormValidityPop()
//   }

//   // Check if the phone number matches the pattern
//   if (!phonePattern.test(phonePop.value.trim())) {
//     phoneErrorPop.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
//     formButtonPop.disabled = true;
//     formButtonPop.classList.add("disabled");
//     return false;
//   } else {
//     phoneErrorPop.textContent = '';
//     phonePop.classList.remove("error-input-pop");
//     checkFormValidityPop()
//   }

//   // Check if the email field is empty
//   if (emailPop.value.trim() === '') {
//     emailErrorPop.textContent = 'Geben Sie bitte Ihre Email-Adresse ein';
//     formButtonPop.disabled = true;
//     formButtonPop.classList.add("disabled");
//     return false;
//   } else {
//     emailErrorPop.textContent = '';
//     emailPop.classList.remove("error-input-pop");
//     checkFormValidityPop()
//   }

//   // Check if the email address is valid
//   if (!isValidEmail(emailPop.value.trim())) {
//     emailErrorPop.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
//     formButtonPop.disabled = true;
//     formButtonPop.classList.add("disabled");
//     return false;
//   } else {
//     emailErrorPop.textContent = '';
//     emailPop.classList.remove("error-input-pop");
//     checkFormValidityPop()
//   }
 
//   // If all the fields are valid, submit the form
//   formButtonPop.disabled = false;
//   formButtonPop.classList.remove("disabled");


//   return true;

// }


// // Add event listeners to the input fields


// namePop.addEventListener('input', validateFormPop);
// phonePop.addEventListener('input', validateFormPop);
// emailPop.addEventListener('input', validateFormPop);

// function checkFormValidityPop() {
//   if (namePop.validity.valid && phonePop.validity.valid && emailPop.validity.valid) {
//     formButtonPop.disabled = false;
//     formButtonPop.classList.remove("disabled");
//   }
// }

function validateFormPop() {
  // Get the input fields
  const namePop = document.querySelector('#namePop');
  const phonePop = document.querySelector('#phonePop');
  const emailPop = document.querySelector('#emailPop');
  const formButtonPop = document.querySelector('.button-form-pop');
  const nameErrorPop = document.querySelector('.name-error-pop');
  const phoneErrorPop = document.querySelector('.phone-error-pop');
  const emailErrorPop = document.querySelector('.email-error-pop');

  // Check if the name field is empty
  if (namePop.value.trim() === '') {
    nameErrorPop.textContent = 'Bitte geben Sie Ihren Namen ein';
    namePop.classList.add("error-input-pop");
    formButtonPop.disabled = true;
    formButtonPop.classList.add("disabled");
    return false;

  } else {
    nameErrorPop.textContent = '';
    namePop.classList.remove("error-input");
    checkFormValidityPop()
  }

  // Check if the phone field is empty
  if (phonePop.value.trim() === '') {
    phoneErrorPop.textContent = 'Bitte geben sie ihre Telefonnummer ein';
    phonePop.classList.add("error-input-pop");
    formButtonPop.disabled = true;
    formButtonPop.classList.add("disabled");
    return false;
  } else {
    phoneErrorPop.textContent = '';
    phonePop.classList.remove("error-input-pop");
    checkFormValidityPop()
  }

  // Check if the phone number matches the pattern
  if (!phonePattern.test(phonePop.value.trim())) {
    phoneErrorPop.textContent = 'Bitte geben Sie eine gültige Telefonnummer ein';
    formButtonPop.disabled = true;
    formButtonPop.classList.add("disabled");
    return false;
  } else {
    phoneErrorPop.textContent = '';
    phonePop.classList.remove("error-input-pop");
    checkFormValidityPop()
  }

  // Check if the email field is empty
  if (emailPop.value.trim() === '') {
    emailErrorPop.textContent = 'Geben Sie bitte Ihre Email-Adresse ein';
    formButtonPop.disabled = true;
    formButtonPop.classList.add("disabled");
    return false;
  } else {
    emailErrorPop.textContent = '';
    emailPop.classList.remove("error-input-pop");
    checkFormValidityPop()
  }

  // Check if the email address is valid
  if (!isValidEmailPop(emailPop.value.trim())) {
    emailErrorPop.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    formButtonPop.disabled = true;
    formButtonPop.classList.add("disabled");
    return false;
  } else {
    emailErrorPop.textContent = '';
    emailPop.classList.remove("error-input-pop");
    checkFormValidityPop()
  }

  // If all the fields are valid, submit the form
  formButtonPop.disabled = false;
  formButtonPop.classList.remove("disabled");

  return true;
}

// Add event listeners to the input fields
const namePop = document.querySelector('#namePop');
const phonePop = document.querySelector('#phonePop');
const emailPop = document.querySelector('#emailPop');
const formButtonPop = document.querySelector('.button-form-pop');

namePop.addEventListener('input', validateFormPop);
phonePop.addEventListener('input', validateFormPop);
emailPop.addEventListener('input', validateFormPop);

function checkFormValidityPop() {
  if (namePop.validity.valid && phonePop.validity.valid && emailPop.validity.valid) {
    formButtonPop.disabled = false;
formButtonPop.classList.remove("disabled")  }
}