let video = document.getElementById("myVideo");
let videoButton = document.getElementById("video-button");
let videoText = document.getElementById("videoBtn-text");

videoButton.addEventListener("click", function(event) {
  const target = event.target;
  if (video.muted) {
    video.play();
    video.muted = false;
    target.querySelector('.buttons__btn-video__icon').src = '../images/video-pause.svg';
    video.style.display = "block";
    videoText.innerHTML = "Videos stoppen";
    
  } else {
    video.pause();
    video.muted = true;
    target.querySelector('.buttons__btn-video__icon').src = '../images/video.svg';
    videoText.innerHTML = "Video abspielen";
    video.style.display = "none";
   
  }
});

