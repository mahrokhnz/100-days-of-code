const dinosaur = document.querySelector(".dinosaur");
const ground = document.querySelector(".ground");
const cactus = document.querySelector(".cactus");
const restart = document.querySelector(".restart");
const main = document.querySelector(".main");

let reqAnimation;
let isPlaying = true;

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && isPlaying) {
    dinosaur.classList.add("active");
    ground.classList.add("active");
  }
});

dinosaur.addEventListener("animationend", () => {
  dinosaur.classList.remove("active");
});

restart.addEventListener("click", () => {
  isPlaying = true;
});

function overlap() {
  let dinosaurY =
    dinosaur.getBoundingClientRect().top - main.getBoundingClientRect().top;
  let cactusX = cactus.getBoundingClientRect().left;

  reqAnimation = window.requestAnimationFrame(overlap);

  //IN DIFFERENT WINDOW SIZES SHOULD BE CHECKED

  if (dinosaurY <= 172 && dinosaurY > 122 && cactusX <= 90 && cactusX >= 0) {
    window.cancelAnimationFrame(reqAnimation);
    isPlaying = false;

    //DOESNT WORK PROPERLY

    ground.style.animationPlayState = "paused";
  }
}

reqAnimation = window.requestAnimationFrame(overlap);
