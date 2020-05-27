const bars = document.querySelectorAll(".player__info-display-equalizer-bar");
let globalAnimationId;
let animationState = "play";

function animateEqualizer() {
  setTimeout(() => {
    bars.forEach((bar) => {
      if (animationState === "play") {
        bar.style.transform = `scaleY(${Math.random() + 0.1})`;
      } else {
        bar.style.transform = `scaleY(${0})`;
      }
    });

    if (animationState === "play") {
      globalAnimationId = requestAnimationFrame(animateEqualizer);
    } else {
      cancelAnimationFrame(globalAnimationId);
    }
  }, 150);
}

export const playEqualizerAnimation = () => {
  animationState = "play";
  globalAnimationId = requestAnimationFrame(animateEqualizer);
};

export function stopEqualizerAnimation() {
  animationState = "stop";
}
