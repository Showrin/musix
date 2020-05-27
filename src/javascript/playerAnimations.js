export const scaleIn = (
  element,
  transitionParam = "all",
  transitonDuration = 0.3,
  transitionFunction = "ease"
) => {
  element.style.transition = `${transitionParam} ${transitonDuration}s ${transitionFunction}`;
  element.style.transform = "scale(1)";
};

export const scaleOut = (
  element,
  transitionParam = "all",
  transitonDuration = 0.3,
  transitionFunction = "ease"
) => {
  element.style.transition = `${transitionParam} ${transitonDuration}s ${transitionFunction}`;
  element.style.transform = "scale(0)";
};
