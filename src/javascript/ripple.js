export const addRippleEffect = (element, rippleColor) => {
  element.addEventListener("click", function (e) {
    const ripple = document.createElement("div");

    element.classList.add("ripple-parent");

    ripple.classList.add("ripple");
    ripple.style.backgroundColor = rippleColor;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
      element.classList.remove("ripple-parent");
    }, 400);
  });
};
