const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");
const header = document.querySelector("header");
const iconContainer = document.querySelector(".icon-container");
const icon = document.querySelector(".icon");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

header.addEventListener("click", function (e) {
  e.preventDefault();
  ctrlVideo();
});

function ctrlVideo() {
  if (video.currentTime != 0) {
    const iconName = getIconName(video);
    showCtrlIcon(iconName);
    setTimeout(function () {
      toggleVideo(video);
      hideCtrlIcon(iconName);
    }, 500);
  }
}

function getIconName(video) {
  if (isVideoPlaying(video)) {
    return "fa-pause-circle";
  } else {
    return "fa-play-circle";
  }
}

function toggleVideo(video) {
  if (isVideoPlaying(video)) {
    video.pause();
  } else {
    video.play();
  }
}

function showCtrlIcon(name) {
  iconContainer.classList.remove("hide-icon");
  icon.classList.add(name);
  iconContainer.style.animation = "bounce 1s ease-in-out 1";
}

function hideCtrlIcon(name) {
  icon.classList.remove(name);
  iconContainer.style.animation = "none";
  iconContainer.classList.add("hide-icon");
}

function isVideoPlaying(video) {
  return !!(
    video.currentTime > 0 &&
    !video.paused &&
    !video.ended &&
    video.readyState > 2
  );
}

function toggleReplayBtn() {
  icon.classList.toggle("fa");
  icon.classList.toggle("fas");
  icon.classList.toggle("fa-redo");
}

video.addEventListener("ended", function () {
  // add replay button
  iconContainer.classList.remove("hide-icon");
  toggleReplayBtn();
  iconContainer.addEventListener("click", function (e) {
    e.preventDefault();
    toggleReplayBtn();
    video.play();
  });
});
