const dinosaur = document.querySelector(".dinosaur");
const cactus = document.querySelector(".cactus");

function jumping() {
  if (dinosaur.classList !== "active") {
    dinosaur.classList.add("active");

    setInterval(() => {
      dinosaur.classList.remove("active");
    }, 2000);
  }
  cactus.classList.add("active");
}

function isAlive() {
  const dinosaurTop = dinosaur.getBoundingClientRect().top;
  const cactusLeft = cactus.getBoundingClientRect().left;

  setInterval(() => {
    console.log(cactusLeft);
  }, 100);
}

document.addEventListener("keydown", jumping);
