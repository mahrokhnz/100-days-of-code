const dinosaur = document.querySelector(".dinosaur");
const cactus = document.querySelector(".cactus");

const dinosaurX = dinosaur.getBoundingClientRect().left;

let cactusX = 0;

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    dinosaur.classList.add("active");
    cactus.classList.add("active");

    cactusX = cactus.getBoundingClientRect().left;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    dinosaur.classList.remove("active");
  }
});
