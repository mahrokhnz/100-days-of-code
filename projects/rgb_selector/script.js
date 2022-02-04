const red = document.querySelector(".r");
const green = document.querySelector(".g");
const blue = document.querySelector(".b");
const resultColor = document.querySelector(".resultColor");
const resultCode = document.querySelector(".resultCode");

function colorMaker() {
  resultColor.style.background = `rgb(${red.value},${green.value},${blue.value})`;
  resultCode.innerHTML = `rgb(${red.value},${green.value},${blue.value})`;
}

red.addEventListener("input", colorMaker);
green.addEventListener("input", colorMaker);
blue.addEventListener("input", colorMaker);
