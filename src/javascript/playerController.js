import {
  playEqualizerAnimation,
  stopEqualizerAnimation,
} from "./equalizarAnimation";
import { getState, changePlayPauseIcon, timeFormatter } from "./playerUtils";
import { addRippleEffect } from "./ripple";

const primaryColor = "#f4631d";
const playPauseButton = document.querySelector("#js-play-pause-btn");
const smallButtons = document.querySelectorAll(
  ".player__controller-buttons-btn--small"
);
const player = document.querySelector("#js-musix-player");
const playingProgress = document.querySelector("#js-playing-progress-bar");
const playingCurrentTime = document.querySelector("#js-song-current-time");
const songDuration = document.querySelector("#js-song-duration");
const playerSeekBar = document.querySelector("#js-playing-time-controller");
const forwardButton = document.querySelector("#js-forward-btn");
const backwardButton = document.querySelector("#js-backward-btn");

let seeking = false;

smallButtons.forEach((button) => {
  addRippleEffect(button, primaryColor);
});

playPauseButton.addEventListener("click", function () {
  const element = playPauseButton.children[0];
  const playerState = getState(player);

  changePlayPauseIcon(element, playerState);
  if (playerState === "paused") {
    player.play();
    playEqualizerAnimation();
  } else {
    player.pause();
    stopEqualizerAnimation();
  }
});

player.addEventListener(
  "timeupdate",
  function () {
    if (!seeking) {
      const played = player.currentTime;
      const duration = player.duration;

      playingProgress.style.width =
        played <= 1 ? "1%" : `${(played / duration) * 100}%`;
      playerSeekBar.value = (played / duration) * 100;
      playingCurrentTime.innerHTML = timeFormatter(played);
      songDuration.innerHTML = timeFormatter(duration);
    }
  },
  false
);

playerSeekBar.addEventListener(
  "input",
  function (e) {
    seeking = true;

    if (seeking) {
      const duration = player.duration;
      const newTime = duration * (playerSeekBar.value / 100);

      player.currentTime = newTime >= duration ? newTime - 1 : newTime;
      playingProgress.style.width =
        newTime <= 1 ? "1%" : `${(newTime / duration) * 100}%`;
      playingCurrentTime.innerHTML = timeFormatter(newTime);
    }
  },
  false
);

playerSeekBar.addEventListener(
  "mouseup",
  function () {
    seeking = false;
  },
  false
);

player.addEventListener("ended", function () {
  const element = playPauseButton.children[0];
  const playerState = getState(element);
  changePlayPauseIcon(element, playerState);
  stopEqualizerAnimation();

  playingProgress.style.width = "0";
  playerSeekBar.value = 0;
  player.currentTime = 0;
  playingCurrentTime.innerHTML = timeFormatter(player.currentTime);
  songDuration.innerHTML = timeFormatter(player.duration);
});

forwardButton.addEventListener(
  "click",
  function () {
    player.currentTime = player.currentTime + 5;
  },
  false
);

backwardButton.addEventListener(
  "click",
  function () {
    player.currentTime = player.currentTime - 5;
  },
  false
);
