const flappyBird = document.querySelector(".flappyBird");

let randomTop = Math.random() * 100;

document.addEventListener("keyup", (e) => {
  flappyBird.classList.remove("active");
  console.log("jj");
});

const animationHandler = () => {
  document.addEventListener("keypress", (e) => {
    if (e.code === "Space") {
      console.log("hh");
    }
  });

  requestAnimationFrame(animationHandler);
};

requestAnimationFrame(animationHandler);
