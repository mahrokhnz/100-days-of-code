const dinosaur = document.querySelector(".dinosaur");

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    dinosaur.classList.add("active");
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    dinosaur.classList.remove("active");
  }
});

console.log(dinosaur);
