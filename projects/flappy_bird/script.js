const flappyBird = document.querySelector(".flappyBird");

document.addEventListener("keydown", (e) => {
  let flappyTop = flappyBird.style.top;
  if (e.code === "Space") {
    flappyTop += "5%";
    flappyTop.style.top = flappyTop;
  }
});
