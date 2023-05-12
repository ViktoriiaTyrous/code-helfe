const videoDes = document.getElementById("myVideo");
const videoButtonDes = document.getElementById("video-button");
const videoTextDes = document.getElementById("videoBtn-text");

videoButtonDes.addEventListener('click', function () {
  if (videoDes.paused) {
    videoDes.play();
    if (window.innerWidth < 600){
      videoDes.style.display = "none";
    } else {
      videoDes.style.display = "block";
    videoTextDes.innerHTML = "Video abspielen";
    videoButtonDes.querySelector('.buttons__btn-video__icon').src = "../images/video.svg";  
  }
  } else if (video.muted) {
    videoDes.pause();
    videoDes.muted = true;
    if (window.innerWidth < 600){
      videoDes.style.display = "none";
    } else {
      videoDes.style.display = "block";
      videoButtonDes.querySelector('.buttons__btn-video__icon').src = "../images/video-pause.svg";
      videoTextDes.innerHTML = "Videos stoppen";
    }
  } 
  else {
    videoDes.pause();
    videoDes.muted = false;
    videoTextDes.innerHTML = "Video abspielen";
    videoButtonDes.querySelector('.buttons__btn-video__icon').src = "../images/video.svg";
  }
});




