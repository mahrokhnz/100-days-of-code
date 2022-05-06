const block = document.querySelector(".block");
const hole = document.querySelector(".hole");
const bird = document.querySelector(".bird");

let jumping = 0;
let counter = 0;

hole.addEventListener("animationiteration", () => {
  const random = -(Math.random() * 400 + 150);
  hole.style.top = random + "px";
  counter++;
});

function gravity() {
  const birdTop = parseInt(
    window.getComputedStyle(bird).getPropertyValue("top")
  );

  if (jumping === 0) {
    bird.style.top = birdTop + 3 + "px";
  }

  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  const holeTop = parseInt(
    window.getComputedStyle(hole).getPropertyValue("top")
  );
  const cTop = -(500 - birdTop);

  if (
    birdTop > 480 ||
    (blockLeft < 20 &&
      blockLeft > -50 &&
      (cTop < holeTop || cTop > holeTop + 100))
  ) {
    alert("Game Over!    Score:" + counter);
    bird.style.top = 100 + "px";
    counter = 0;
  }

  requestAnimationFrame(gravity);
}

requestAnimationFrame(gravity);

document.addEventListener("click", () => {
  jumping = 1;
  let jumpCount = 0;

  const jumpInterval = setInterval(function () {
    const birdTop = parseInt(
      window.getComputedStyle(bird).getPropertyValue("top")
    );

    if (birdTop > 6 && jumpCount < 15) {
      bird.style.top = birdTop - 5 + "px";
    }

    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }

    jumpCount++;
  }, 10);
});
