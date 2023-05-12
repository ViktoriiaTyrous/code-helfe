let video = document.getElementById("myVideo");
let videoButton = document.getElementById("video-button");
let videoText = document.getElementById("videoBtn-text");


videoButton.addEventListener('click', function () {
  if (video.paused) {
      video.play();
      video.style.display = "block"
      videoText.innerHTML = "Video abspielen";
      videoButton.querySelector('.buttons__btn-video__icon').src = "../images/video.svg";
    
  } else if (video.muted) {
    video.play();
    video.style.display = "none"
    video.muted = false;
    videoText.innerHTML = "Video abspielen";
    videoButton.querySelector('.buttons__btn-video__icon').src = "../images/video.svg";
    
  } else 
  video.pause();
  video.muted = true;
  video.style.display = "block";
  videoButton.querySelector('.buttons__btn-video__icon').src = "../images/video-pause.svg";
  videoText.innerHTML = "Videos stoppen";
},
true);
if (video.muted == true) {
  videoText.innerHTML = "Video abspielen";
} else
videoText.innerHTML = "Videos stoppen";






