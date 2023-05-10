let video = document.getElementById("myVideo");
let videoButton = document.getElementById("video-button");
let videoText = document.getElementById("videoBtn-text");

videoButton.addEventListener("click", function() {
  if (video.muted) {
    video.play();
    video.muted = false;
    videoButton.querySelector('.buttons__btn-video__icon').src = './images/video-pause.svg';
  } else {
    video.pause();
    video.muted = true;
    videoButton.querySelector('.buttons__btn-video__icon').src = './images/video.svg';
  
  }
});

