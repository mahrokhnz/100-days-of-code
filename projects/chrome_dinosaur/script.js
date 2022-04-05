const dinosaur = document.querySelector(".dinosaur");
const cactus = document.querySelector(".cactus");
const ground = document.querySelector(".ground");

const dinosaurX = dinosaur.getBoundingClientRect().left;

let cactusX = 0;

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    dinosaur.classList.add("active");
    ground.classList.add("active");

    console.log(dinosaurX);

    cactusX = cactus.getBoundingClientRect().left;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    dinosaur.classList.remove("active");
  }
});
