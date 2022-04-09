const dinosaur = document.querySelector(".dinosaur");
const ground = document.querySelector(".ground");
const cactus = document.querySelector(".cactus");

let frameId;
let dinosaurY;
let cactusX;
let reqAnimation;
let playing = true;

function conflict() {
  let dinosaurY = dinosaur.getBoundingClientRect().top;
  let cactusX = cactus.getBoundingClientRect().left;

  let reqAnimation = window.requestAnimationFrame(conflict);

  window.cancelAnimationFrame(reqAnimation);
}

function jumping() {
  playing && dinosaur.classList.add("active");
}

dinosaur.addEventListener("animationend", () => {
  dinosaur.classList.remove("active");
});

function moving() {
  if (playing) {
    ground.classList.add("active");
    window.cancelAnimationFrame(reqAnimation);
    conflict();
  }
}

ground.addEventListener("animationend", () => {
  ground.classList.remove("active");
});

document.addEventListener("keydown", () => {
  jumping();
  moving();
});
