let video = document.getElementById("myVideo");
let videoButton = document.getElementById("video-button");
let videoText = document.getElementById("videoBtn-text");


videoButton.addEventListener('click', function () {
  if (video.paused) {
      video.play();
      videoText.innerHTML = "Video abspielen";
      videoButton.querySelector('.buttons__btn-video__icon').src = "../images/video.svg";
    
  } else if (video.muted) {
    video.play();
    video.muted = false;
    videoText.innerHTML = "Video abspielen";
    videoButton.querySelector('.buttons__btn-video__icon').src = "../images/video.svg";
  } else 
  video.pause();
  videoButton.querySelector('.buttons__btn-video__icon').src = "../images/video-pause.svg";
  videoText.innerHTML = "Videos stoppen";
},
true);







