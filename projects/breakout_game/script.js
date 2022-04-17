const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//FULL SCREEN CANVAS
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//COLORIZE
ctx.fillStyle = "lightBlue";
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    console.log("hjhg");
  }
});

function ballHandler() {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.rect(500, canvas.height, 300, 100);
  ctx.fill();
}

//Ball
const ball = {
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: 20,
  color: "white",
  sx: Math.random() * 10 - 5,
  sy: Math.random() * 10 - 5,
};

function drawCircles() {
  ctx.fillStyle = "lightBlue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = ball.color;
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, false);
  ctx.fill();
}

function animate() {
  ball.x += ball.sx;
  ball.y += ball.sy;

  if (ball.x < ball.r || ball.x > canvas.width - ball.r) {
    ball.sx = -ball.sx;
  }

  if (ball.y < ball.r || ball.y > canvas.height - ball.r) {
    ball.sy = -ball.sy;
  }

  drawCircles();

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
