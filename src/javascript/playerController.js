import {
  playEqualizerAnimation,
  stopEqualizerAnimation,
} from "./equalizarAnimation";
import { getState, changePlayPauseIcon } from "./playerUtils";

const playPauseButton = document.querySelector("#js-play-pause-btn");

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
