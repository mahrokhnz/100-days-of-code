const flappyBird = document.querySelector(".flappyBird");

let randomTop = Math.random() * 100;

document.addEventListener("keyup", (e) => {
  flappyBird.classList.remove("active");
  console.log("jj");
});

const animationHandler = () => {
  document.addEventListener("keypress", (e) => {
    if (e.code === "Space") {
      flappyBird.style.top += "10px";
    }
  });

  requestAnimationFrame(animationHandler);
};

requestAnimationFrame(animationHandler);
