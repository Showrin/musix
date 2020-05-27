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

smallButtons.forEach((button) => {
  addRippleEffect(button, primaryColor);
});

playPauseButton.addEventListener("click", function () {
  const element = playPauseButton.children[0];
  const playerState = getState(element);

  changePlayPauseIcon(element, playerState);
  if (playerState === "play") {
    playEqualizerAnimation();
  } else {
    stopEqualizerAnimation();
    return 0;
  }
});
