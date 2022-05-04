const flappyBird = document.querySelector(".flappyBird");
const ground = document.querySelector(".ground");
const pipes = document.querySelectorAll(".pipe");

//Speeds
let groundSpeed = 3;
let gravity = 0.5;

let gameState = "Start";

const groundB = ground.getBoundingClientRect();

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && gameState !== "Play") {
    pipes.forEach((pipe) => {
      pipe.remove();
    });

    flappyBird.style.top = "40vh";
    gameState = "Play";
    play();
  }
});

function play() {
  function move() {
    if (gameState !== "Play") return;

    pipes.forEach((pipe) => {
      let pipeB = pipe.getBoundingClientRect();
      let flappyBirdB = flappyBird.getBoundingClientRect();

      if (pipeB.right <= 0) {
        pipe.remove();
      } else {
        if (
          flappyBirdB.left < pipeB.left + pipeB.width &&
          flappyBirdB.left + flappyBirdB.width > pipeB.left &&
          flappyBirdB.top < pipeB.top + pipeB.height &&
          flappyBirdB.top + flappyBirdB.height > pipeB.top
        ) {
          gameState = "End";
          return;
        }
        requestAnimationFrame(move);
      }
      requestAnimationFrame(move);

      let flappyBirdY = 0;

      function applyGravity() {
        if (gameState !== "Play") return;

        flappyBirdY += gravity;

        document.addEventListener("keydown", (e) => {
          if (e.key === "ArrowUp" || e.key === " ") {
            flappyBirdY = -7.6;
          }
        });

        if (flappyBirdB <= 0 || flappyBirdB.bottom >= groundB.bottom) {
          gameState = "End";
          return;
        }

        flappyBird.style.top = flappyBird.top + flappyBirdY + "px";
        flappyBirdB = flappyBird.getBoundingClientRect();

        requestAnimationFrame(applyGravity);
      }

      requestAnimationFrame(applyGravity);

      let pipeSeperation = 0;

      let pipeGap = 35;

      function create_pipe() {
        if (gameState !== "Play") return;

        if (pipeSeperation > 115) {
          pipeSeperation = 0;

          let pipePosition = Math.floor(Math.random() * 43) + 8;
          let pipeSpriteInv = document.createElement("div");
          pipeSpriteInv.className = "pipeSprite";
          pipeSpriteInv.style.top = pipePosition - 70 + "vh";
          pipeSpriteInv.style.left = "100vw";

          document.body.appendChild(pipeSpriteInv);
          let pipeSprite = document.createElement("div");
          pipeSprite.className = "pipeSprite";
          pipeSprite.style.top = pipePosition + pipeGap + "vh";
          pipeSprite.style.left = "100vw";
          pipeSprite.increase_score = "1";

          document.body.appendChild(pipeSprite);
        }
        pipeSeperation++;
        requestAnimationFrame(create_pipe);
      }

      requestAnimationFrame(create_pipe);
    });
  }
}
