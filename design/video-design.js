let video = document.getElementById("myVideo");
let videoButton = document.getElementById("video-button");
let videoText = document.getElementById("videoBtn-text");

videoButton.addEventListener("click", function() {
  if (video.muted) {
    video.play();
    video.muted = false;
    video.classList.add("play")
    videoButton.querySelector('.buttons__btn-video__icon').src = "../images/video-pause.svg";
    videoTextDesign.innerHTML = "Videos stoppen";
  } else {
    video.classList.remove("play")
  }
 
});







