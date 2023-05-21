let video = document.getElementById("myVideo");
let videoButton = document.getElementById("video-button");
let videoText = document.getElementById("videoBtn-text");

videoButton.addEventListener('click', function () {
  if (video.paused) {
    video.play();
    video.muted = false;
    if (window.innerWidth < 600){
      video.style.display = "block";
      video.style.top = "-300px";
      video.style.position = "absolute";
      // video.classList.add("mobile");
    } else {
      video.style.display = "block";
      videoText.innerHTML = "Video abspielen";
      videoButton.querySelector('.buttons__btn-video__icon').src = "../images/video.svg";  
  }
  } else {
      video.pause();
      video.muted = true;
    if (window.innerWidth < 600){
      video.style.display = "block";
      video.style.top = "-300px";
      video.style.position = "absolute";
      // video.classList.add("mobile");
    } else {
      video.muted = false;
      video.style.display = "block";
      videoButton.querySelector('.buttons__btn-video__icon').src = "../images/video-pause.svg";
      videoText.innerHTML = "Videos stoppen";
    }

}
});