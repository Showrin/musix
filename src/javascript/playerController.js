import {
  playEqualizerAnimation,
  stopEqualizerAnimation,
} from "./equalizarAnimation";
import { getState, changePlayPauseIcon } from "./playerUtils";
import { addRippleEffect } from "./ripple";

const playPauseButton = document.querySelector("#js-play-pause-btn");
const smallButtons = document.querySelectorAll(
  ".player__controller-buttons-btn--small"
);
const primaryColor = "#f4631d";
const player = document.querySelectorAll("#js-musix-player")[0];

smallButtons.forEach((button) => {
  addRippleEffect(button, primaryColor);
});

playPauseButton.addEventListener("click", function () {
  const element = playPauseButton.children[0];
  const playerState = getState(element);

  changePlayPauseIcon(element, playerState);
  if (playerState === "play") {
    playEqualizerAnimation();
    player.play();
  } else {
    stopEqualizerAnimation();
    player.pause();
  }
});
