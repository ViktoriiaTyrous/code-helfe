
// let video = document.getElementById("myVideo");
// let videoButton = document.getElementById("video-button");
// let videoText = document.getElementById("videoBtn-text");

// videoButton.addEventListener("click", function() {
//   if (video.muted) {
//     video.play();
//     video.muted = false;
//     videoButton.querySelector('.buttons__btn-video__icon').src = './images/video-pause.svg';
//     videoButton.querySelector('.buttons__btn-video__icon').src = '../images/video-pause.svg';
//     videoText.innerHTML = "Videos stoppen";
//   } else {
//     video.pause();
//     video.muted = true;
//     videoButton.querySelector('.buttons__btn-video__icon').src = './images/video.svg';
//     videoButton.querySelector('.buttons__btn-video__icon').src = '../images/video.svg';
//     videoText.innerHTML = "Video abspielen"
//   }
  
// });

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
//______________________________________________________//
closeButton.onclick = hidePopup;
const element = document.querySelector(".js-choice");
const choices = new Choices(element, {
  searchEnabled: false,
});

const anim = lottie;
anim.loadAnimation({
  container: document.querySelector("#lottie_1"),
  render: "svg",
  loop: true,
  autoplay: true,
  path: "./animation/prana_02.json",
});
anim.loadAnimation({
  container: document.querySelector("#lottie_2"),
  render: "svg",
  loop: true,
  autoplay: true,
  path: "./animation/01.json",
});
anim.loadAnimation({
  container: document.querySelector("#lottie_6"),
  render: "svg",
  loop: true,
  autoplay: true,
  path: "./animation/Musse_002.json",
});
anim.loadAnimation({
  container: document.querySelector("#lottie_3"),
  render: "svg",
  loop: true,
  autoplay: true,
  path: "./animation/old.json",
});
anim.loadAnimation({
  container: document.querySelector("#lottie_9"),
  render: "svg",
  loop: true,
  autoplay: true,
  path: "./animation/new.json",
});
anim.loadAnimation({
  container: document.querySelector("#lottie_7"),
  render: "svg",
  loop: true,
  autoplay: true,
  path: "../animation/prana_02.json",
});
anim.loadAnimation({
  container: document.querySelector("#lottie_8"),
  render: "svg",
  loop: true,
  autoplay: true,
  path: "../animation/01.json",
});
anim.loadAnimation({
  container: document.querySelector("#lottie_10"),
  render: "svg",
  loop: true,
  autoplay: true,
  path: "../animation/Musse_002.json",
});
anim.loadAnimation({
  container: document.querySelector("#lottie_11"),
  render: "svg",
  loop: true,
  autoplay: true,
  path: "../animation/old.json",
});
anim.loadAnimation({
  container: document.querySelector("#lottie_12"),
  render: "svg",
  loop: true,
  autoplay: true,
  path: "../animation/new.json",
});
anim.loadAnimation({
  container: document.querySelector("#lottie_13"),
  render: "svg",
  loop: true,
  autoplay: true,
  path: "./animation/mobile_de.json",
});
anim.loadAnimation({
  container: document.querySelector("#lottie_14"),
  render: "svg",
  loop: true,
  autoplay: true,
  path: "./animation/mobile_de.json",
});
anim.loadAnimation({
  container: document.querySelector("#lottie_15"),
  render: "svg",
  loop: true,
  autoplay: true,
  path: "../animation/mobile_de.json",
});
anim.loadAnimation({
  container: document.querySelector("#lottie_16"),
  render: "svg",
  loop: true,
  autoplay: true,
  path: "../animation/mobile_de.json",
});


var swiper = new Swiper(".mySwiper_1", {
  slidesPerView: 'auto',
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


document.addEventListener("click", documentClick);

function documentClick(e) {
  const targetItem = e.target;
  if (targetItem.closest(".burger")) {
    document.body.classList.toggle("burger-open");
  }
}

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



let personalBtn = document.querySelector('.personal-btn');
personalBtn.addEventListener('click', function() {
  let textForPersonal = document.querySelector('.text-for-personal');
  if (textForPersonal.classList.contains('active')) {
    textForPersonal.classList.remove('active');
  } else {
    textForPersonal.classList.add('active');
  }
});





