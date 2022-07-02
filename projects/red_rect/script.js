const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let y = 100;

//FULL SCREEN CANVAS
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//COLORIZE
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

document.addEventListener("keydown", (e) => movingRedRect(e));

const drawRect = (newY) => {
  ctx.clearRect(20, y, 50, 50);

  ctx.beginPath();
  ctx.rect(20, newY, 50, 50);
  ctx.fillStyle = "red";
  ctx.fillRect(20, newY, 50, 50);
};

const movingRedRect = (e) => {
  if (e.key === "ArrowDown") {
    setInterval(() => {
      let newY = y + 2;
      drawRect(newY);
    }, 100);
  }

  if (e.key === "ArrowUp") {
    setInterval(() => {
      let newY = y - 2;
      drawRect(newY);

      drawRect(y);
    }, 100);
  }

  window.requestAnimationFrame(movingRedRect);
};
window.requestAnimationFrame(movingRedRect);

ctx.beginPath();
ctx.rect(20, y, 50, 50);
ctx.fillStyle = "red";
ctx.fillRect(20, y, 50, 50);
