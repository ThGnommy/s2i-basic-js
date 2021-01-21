const counterValue = document.getElementById("counter-value");
const plus = document.getElementById("plus");
const less = document.getElementById("less");
const img = document.getElementById("img");

let value = 0;
let imgBlur = 100;

counterValue.innerHTML = value + "%";
img.style.filter = `blur(100px)`;

const plusOne = () => {
  if (value < 100) {
    value++;
    counterValue.innerHTML = value + "%";
    img.style.filter = `blur(${imgBlur - value}px)`;
    console.log(imgBlur - value);
  }
};

const lessOne = () => {
  if (value > 0) {
    value--;
    counterValue.innerHTML = value + "%";
    img.style.filter = `blur(${imgBlur - value}px)`;
    console.log(imgBlur - value);
  }
};

plus.addEventListener("click", () => plusOne());
less.addEventListener("click", () => lessOne());
