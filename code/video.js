let videoDesign = document.getElementById("myVideo");
let videoButtonDesign = document.getElementById("video-button");
let videoTextDesign = document.getElementById("videoBtn-text");

videoButtonDesign.addEventListener("click", function() {
  if (videoDesign.muted) {
    videoDesign.play();
    videoDesign.muted = false;
    videoButtonDesign.querySelector('.buttons__btn-video__icon').src = "./images/video-pause.svg";
    videoText.innerHTML = "Videos stoppen";

  } else {
    videoDesign.pause();
    videoDesign.muted = true;
    videoButtonDesign.querySelector('.buttons__btn-video__icon').src = "./images/video.svg";
    videoText.innerHTML = "Video abspielen";
  }
});
