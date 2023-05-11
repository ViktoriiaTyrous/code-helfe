let video = document.getElementById("myVideo");
let videoButton = document.getElementById("video-button");
let videoText = document.getElementById("videoBtn-text");

videoButton.addEventListener("click", function() {
  if (video.muted) {
    video.play();
    video.muted = false;
    videoButton.querySelector('.buttons__btn-video__icon').src = './images/video-pause.svg';
    video.style.display = "block";
    videoText.innerHTML = "Videos stoppen";
  } else {
    video.pause();
    video.muted = true;
    videoButton.querySelector('.buttons__btn-video__icon').src = './images/video.svg';
    videoText.innerHTML = "Video abspielen";
    video.style.display = "block";
  }
});

