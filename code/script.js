
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
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is <= 640px
    800: {
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

const tabButtons = document.querySelectorAll('.structure__btn');
const tabContentBoxes = document.querySelectorAll('.structure__content-box');

const arrowRightBtn = document.querySelector('.arrow-right');
const arrowLeftBtn = document.querySelector('.arrow-left');

let currentTabIndex = 0;

function showTab(index) {
  tabContentBoxes.forEach(box => box.classList.remove('active'));
  tabContentBoxes[index].classList.add('active');
  tabButtons.forEach(button => button.classList.remove('active'));
  tabButtons[index].classList.add('active');
  currentTabIndex = index;
}

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    showTab(index);
  });
});

arrowLeftBtn.addEventListener('click', () => {
  currentTabIndex++;
  if (currentTabIndex >= tabContentBoxes.length) {
    currentTabIndex = 0;
  }
  showTab(currentTabIndex);
});

arrowRightBtn.addEventListener('click', () => {
  currentTabIndex--;
  if (currentTabIndex < 0) {
    currentTabIndex = tabContentBoxes.length - 1;
  }
  showTab(currentTabIndex);
});

const btns = document.querySelectorAll('.structure__btn-mobile');
const contentBox = document.querySelectorAll('.structure__content-box-mobile');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    if (contentBox[i].style.display === 'block') {
      contentBox[i].style.display = 'none';
      btns[i].classList.remove('active');
    } else {
      contentBox.forEach(box => {
        box.style.display = 'none';
      });
      contentBox[i].style.display = 'block';
      btns.forEach(btn => {
        btn.classList.remove('active');
      });
      btns[i].classList.add('active');
    }
  });
}
