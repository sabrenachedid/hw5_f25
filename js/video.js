var video;

window.addEventListener("load", function() {
  console.log("window loaded");

  video = document.querySelector("#player1");
  video.autoplay = false;
  video.loop = false;
  video.pause();
});


document.querySelector("#play").addEventListener("click", function() {
  console.log("play video");
  video.play();
  document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});


document.querySelector("#pause").addEventListener("click", function() {
  console.log("pause video");
  video.pause();
});


document.querySelector("#slower").addEventListener("click", function () {
    video.playbackRate *= 0.9;
    console.log("New speed is " + video.playbackRate * 2);
});


document.querySelector("#faster").addEventListener("click", function() {
  video.playbackRate = video.playbackRate / 0.9;
  console.log("speed is now", video.playbackRate);
});


document.querySelector("#skip").addEventListener("click", function() {
  video.currentTime += 10;
  video.currentTime += 10; 

  if (video.currentTime >= video.duration) {
    video.currentTime = 0;
  }

  console.log("current time", video.currentTime);
});


document.querySelector("#mute").addEventListener("click", function() {
  if (video.muted) {
    video.muted = false;
    this.innerHTML = "Mute";
  } else {
    video.muted = true;
    this.innerHTML = "Unmute";
  }
});


document.querySelector("#slider").addEventListener("input", function() {
  video.volume = this.value / 100;
  document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});


document.querySelector("#vintage").addEventListener("click", function() {
  video.classList.add("oldSchool");
});


document.querySelector("#orig").addEventListener("click", function() {
  video.classList.remove("oldSchool");
});
