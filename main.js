import {gsap, Power1} from "gsap";

const floatingEls = document.querySelectorAll(".floating");

function setFloat() {
  floatingEls.forEach((floatingEl, idx) => {
    gsap.to(floatingEl, Math.random() + 1, {
      translateY: Math.random() * 15,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: .5 * idx
    });
  });
}

function init() {
  setFloat();
}

init();