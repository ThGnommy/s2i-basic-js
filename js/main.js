import { counterValue, plus, less, img, progressBar } from "./selectors";
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

// const getRandomImage = async () => {
//   await fetch(
//     "https://api.unsplash.com/photos/random/?" +
//       new URLSearchParams({
//         featured: true,
//         collections: "2292047, 3822610",
//       }),
//     {
//       headers: {
//         Authorization: `Client-ID ${process.env.API_KEY}`,
//       },
//     }
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       imgSrc = data.urls.regular;
//       img.style.background = `url("${imgSrc}")`;
//     })
//     .catch((error) => {
//       img.style.background = `url("${defaultImg}")`;
//       throw new Error(error);
//     });
// };

getRandomImage();
