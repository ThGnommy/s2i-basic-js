import {
  counterValue,
  plus,
  less,
  img,
  progressBar,
  reloadIcon,
} from "./selectors";
import { getRandomImage } from "./fetch";

let value = 0;
let imgBlur = 100;
let interval;
counterValue.innerHTML = value + "%";
img.style.filter = `blur(100px)`;

const plusOne = () => {
  interval = setInterval(() => {
    if (value < 100) {
      value++;
      counterValue.innerHTML = value + "%";
      img.style.filter = `blur(${imgBlur - value}px)`;
      progressBar.value = value;
    }
  }, 25);
};

const lessOne = () => {
  interval = setInterval(() => {
    if (value > 0) {
      value--;
      counterValue.innerHTML = value + "%";
      img.style.filter = `blur(${imgBlur - value}px)`;
      progressBar.value = value;
    }
  }, 25);
};

const reloadAnimation = () => {
  reloadIcon.style.animation = "icon-anim 1s ease-in-out 0.2s";
};

const resetImg = () => {
  value = 0;
  imgBlur = 100;
  reloadIcon.style.removeProperty("animation");
  counterValue.innerHTML = 0 + "%";
  img.style.filter = `blur(100px)`;
  getRandomImage();
};

plus.addEventListener("mousedown", () => plusOne());
plus.addEventListener("mouseup", () => clearInterval(interval));
plus.addEventListener("mouseleave", () => clearInterval(interval));

plus.addEventListener("touchstart", () => plusOne());
plus.addEventListener("touchend", () => clearInterval(interval));

less.addEventListener("mousedown", () => lessOne());
less.addEventListener("mouseup", () => clearInterval(interval));
less.addEventListener("mouseleave", () => clearInterval(interval));

less.addEventListener("touchstart", () => lessOne());
less.addEventListener("touchend", () => clearInterval(interval));

reloadIcon.addEventListener("click", () => reloadAnimation());
reloadIcon.addEventListener("animationend", () => resetImg());

getRandomImage();
