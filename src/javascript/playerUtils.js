import { scaleIn, scaleOut } from "./playerAnimations";

export const getState = (element) => {
  return !element.paused ? "playing" : "paused";
};

export const changePlayPauseIcon = (element, state) => {
  scaleOut(element, "transform", 0.1);

  setTimeout(() => {
    if (state === "paused") {
      element.classList.remove("icon-play");
      element.classList.add("icon-pause");
    } else {
      element.classList.remove("icon-pause");
      element.classList.add("icon-play");
    }

    scaleIn(element, "transform", 0.1);
  }, 100);
};

export const timeFormatter = (second) => {
  let hourString, minuteString, secondString;

  second = Math.round(second);

  const hour = parseInt(second / 3600, 10);
  second -= hour * 3600;

  const minute = parseInt(second / 60);
  second -= minute * 60;

  if (hour === 0) {
    hourString = "";
  } else if (hour <= 9 && hour >= 1) {
    hourString = `0${hour}:`;
  } else {
    hourString = `${hour}:`;
  }

  if (minute === 0) {
    minuteString = "00:";
  } else if (minute <= 9 && minute >= 1) {
    minuteString = `0${minute}:`;
  } else {
    minuteString = `${minute}:`;
  }

  if (second === 0) {
    secondString = "00";
  } else if (second <= 9 && second >= 1) {
    secondString = `0${second}`;
  } else {
    secondString = `${second}`;
  }

  return `${hourString}${minuteString}${secondString}`;
};
