const dinosaur = document.querySelector(".dinosaur");
const ground = document.querySelector(".ground");
const cactus1 = document.querySelector(".cactus1");
const cactus2 = document.querySelector(".cactus2");
const main = document.querySelector(".main");
const gameOver = document.querySelector(".gameOver");

let reqAnimation;
let hasOverlap = false;

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    if (!hasOverlap) {
      dinosaur.classList.add("active");
      ground.classList.add("active");
    } else {
      dinosaur.classList.remove('active')
      ground.classList.remove('active')
      dinosaur.style.animationPlayState= null
      ground.style.animationPlayState= null
      gameOver.style.display = "none";
      hasOverlap = false
    }
  }
});

dinosaur.addEventListener("animationend", () => {
  dinosaur.classList.remove("active");
});

ground.addEventListener("animationend", () => {
  ground.classList.remove("active");
});

function overlap() {
  let dinosaurY =
    dinosaur.getBoundingClientRect().top - main.getBoundingClientRect().top;
  let cactus1X =
    cactus1.getBoundingClientRect().left - main.getBoundingClientRect().left;
  let cactus2X =
    cactus2.getBoundingClientRect().left - main.getBoundingClientRect().left;

  reqAnimation = window.requestAnimationFrame(overlap);

  if (cactus1X <= 50 && cactus1X >= 0 || cactus2X <= 50 && cactus2X >= 0) {
    if (dinosaurY <= 172 && dinosaurY > 122) {
      ground.style.animationPlayState = "paused";
      dinosaur.style.animationPlayState = "paused";
      gameOver.style.display = "block";
      hasOverlap = true;
    }
  }

}

reqAnimation = window.requestAnimationFrame(overlap);
