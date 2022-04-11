const dinosaur = document.querySelector(".dinosaur");
const ground = document.querySelector(".ground");
const cactus = document.querySelector(".cactus");
const restart = document.querySelector(".restart");
const main = document.querySelector(".main");
const gameOver = document.querySelector(".gameOver");
const button = document.querySelector(".button");

let reqAnimation;

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    dinosaur.classList.add("active");
    ground.classList.add("active");
    // ground.style.animation = "none";
    // ground.style.offsetWidth;
    // ground.style.animation = "moving 4s linear";
    // dinosaur.style.animation = "none";
    // dinosaur.style.offsetWidth;
    // dinosaur.style.animation = "jumping 0.8s linear";
  }
});

dinosaur.addEventListener("animationend", () => {
  dinosaur.classList.remove("active");
});

ground.addEventListener("animationend", () => {
  ground.classList.remove("active");
});

button.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    // e.stopPropagation();
    // console.log("jj");
    //ADD RESTART BUTTON
  }
});

function overlap() {
  let dinosaurY =
    dinosaur.getBoundingClientRect().top - main.getBoundingClientRect().top;
  let cactusX =
    cactus.getBoundingClientRect().left - main.getBoundingClientRect().left;

  reqAnimation = window.requestAnimationFrame(overlap);

  //IN DIFFERENT WINDOW SIZES SHOULD BE CHECKED

  if (dinosaurY <= 172 && dinosaurY > 122 && cactusX <= 50 && cactusX >= 0) {
    window.cancelAnimationFrame(reqAnimation);
    ground.style.animationPlayState = "paused";
    dinosaur.style.animationPlayState = "paused";
    gameOver.style.display = "block";
  }
}

reqAnimation = window.requestAnimationFrame(overlap);
