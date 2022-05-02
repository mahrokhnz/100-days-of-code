const flappyBird = document.querySelector(".flappyBird");
const start = document.querySelector(".start");

document.addEventListener("click", () => {
  flappyBird.style.top = "3px";

  setInterval(() => {
    flappyBird.style.top = "100%";
  }, 3000);
});
