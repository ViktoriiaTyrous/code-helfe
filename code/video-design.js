videoButton.addEventListener("click", function() {
  if (video.muted) {
    video.play();
    video.muted = false;
    videoButton.querySelector('.buttons__btn-video__icon').src = '../images/video-pause.svg';
    video.style.display = "block";
  } else {
    video.pause();
    video.muted = true;
    videoButton.querySelector('.buttons__btn-video__icon').src = '../images/video.svg';
    video.style.display = "none";
    if (video.style.display === "none") {
      videoButton.querySelector('.buttons__btn-video__icon').src = '../images/video.svg';
    }
  }
});






