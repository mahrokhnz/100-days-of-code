const dinosaur = document.querySelector(".dinosaur");
const ground = document.querySelector(".ground");

let frameId;

function jumping() {
  dinosaur.classList.add("active");
  ground.classList.add("active");
}

document.addEventListener("keydown", jumping);
dinosaur.addEventListener("animationend", () => {
  dinosaur.classList.remove("active");
});
ground.addEventListener("animationend", () => {
  ground.classList.remove("active");
});
