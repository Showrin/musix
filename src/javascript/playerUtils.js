import { scaleIn, scaleOut } from "./playerAnimations";

export const getState = (element) => {
  // TODO: Have to change state based on audio player
  return element.classList.contains("icon-play") ? "play" : "pause";
};

export const changePlayPauseIcon = (element, state) => {
  scaleOut(element, "transform", 0.1);

  setTimeout(() => {
    if (state === "play") {
      element.classList.remove("icon-play");
      element.classList.add("icon-pause");
    } else {
      element.classList.remove("icon-pause");
      element.classList.add("icon-play");
    }

    scaleIn(element, "transform", 0.1);
  }, 100);
};
