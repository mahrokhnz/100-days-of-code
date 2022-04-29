const flappyBird = document.querySelector(".flappyBird");

let randomTop = Math.random() * 100;
document.addEventListener("keypress", (e) => {
  if (e.code === "Space") {
    flappyBird.classList.add("active");
  }
});

document.addEventListener("keyup", (e) => {
  flappyBird.classList.remove("active");
  console.log("jj");
});

// const animationHandler = () => {
//   requestAnimationFrame(animationHandler);
// };
//
// requestAnimationFrame(animationHandler);
