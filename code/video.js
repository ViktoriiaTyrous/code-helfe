

let video = document.getElementById("video");
let videoButton = document.getElementById("video-button");
let videoText = document.getElementById("videoBtn-text");

videoButton.addEventListener('click', function () {
  if (video.paused) {
    video.play();
    if (window.innerWidth < 600){
      video.classList.add("mobile");
    } else {
      video.style.display = "block";
      videoText.innerHTML = "Video abspielen";
      videoButton.querySelector('.buttons__btn-video__icon').src = "./images/video.svg";  
  }
  } else if (video.muted) {
      video.pause();
      video.muted = true;
    if (window.innerWidth < 600){
      video.classList.add("mobile");
    } else {
      video.style.display = "block";
      videoButton.querySelector('.buttons__btn-video__icon').src = "./images/video-pause.svg";
      videoText.innerHTML = "Videos stoppen";
    }

}
});