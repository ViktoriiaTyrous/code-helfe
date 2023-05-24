// NAVIGATION //

const navLinks = document.querySelectorAll(".list__item a");
const navLinksActive = document.querySelector(".list__item a.active");

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
  });
  link.addEventListener("mouseout", () => {
    navLinks.forEach((link) => {
      navLinksActive.classList.add("active");
    });
  });
});


// POPUP //


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
  shouldSort: false,
});




// SLIDER TEAM//


var swiper = new Swiper(".mySwiper_1", {
  slidesPerView: "auto",
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: false,
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
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is <= 480px
    480: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    540: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is <= 640px
    800: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


// SLIDER PROJECTS //

var swiper = new Swiper(".mySwiper_2", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
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


// TABS PROJECTS //

const categorySelect = document.querySelector("#project-category");
const contentBoxes = document.querySelectorAll(".content-box");

categorySelect.addEventListener("change", () => {
  const selectedCategory = categorySelect.value;

  contentBoxes.forEach((box) => box.classList.remove("active"));

  const selectedBox = document.querySelector(`#${selectedCategory}`);
  selectedBox.classList.add("active");
});

const tabs = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content-box");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    var line = document.querySelector(".line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    content.forEach((tab) => {
      tab.classList.remove("active");
    });
    content[index].classList.add("active");
  });
});

// BURGER MENU //



document.addEventListener("click", documentClick);

function documentClick(e) {
  const targetItem = e.target;
  if (targetItem.closest(".burger")) {
    document.body.classList.toggle("burger-open");
  }
}

// ABOUT TEXT BLOCK - READ MORE //

const btn = document.getElementById("myBtn");
btn.addEventListener("click", function () {
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

function toggleFlag(event) {
  event.preventDefault(); // Зупиняє перехід за посиланням

  var flag = event.target.querySelector('.menu-list__soon-flag');
  flag.classList.toggle('show');

  setTimeout(function() {
    flag.classList.remove('show');
  }, 1200); 

}



// ANIMATION //
let anim = lottie;



