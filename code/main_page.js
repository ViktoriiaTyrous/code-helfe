 anim = lottie;
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


  // HOME PAGE LAST SERVICE - PERSONALISATION //

let personalBtn = document.querySelector(".personal-btn");
personalBtn.addEventListener("click", function () {
  let textForPersonal = document.querySelector(".text-for-personal");
  if (textForPersonal.classList.contains("active")) {
    textForPersonal.classList.remove("active");
  } else {
    textForPersonal.classList.add("active");
  }
});
