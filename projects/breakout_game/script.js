const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//FULL SCREEN CANVAS
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// //COLORIZE
ctx.fillStyle = "lightBlue";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//Ball
const ball = {
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: 20,
  color: "red",
  sx: 8,
  sy: 2,
};

//RECT
const rect = {
  x: 200,
  y: canvas.height - 20,
  width: 200,
  height: 10,
};

function draw() {
  ctx.fillStyle = "lightBlue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = ball.color;
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, false);
  ctx.fill();

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.rect(rect.x, rect.y, rect.width, rect.height);
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

  // if (ball.y === rect.y) {
  //   ball.sy = -ball.sy;
  // }

  //SHOULD CONTROL BALL MOVEMENT

  canvas.addEventListener("keydown", function (e) {
    if (e.code === "ArrowRight") {
      if (rect.x < canvas.width - rect.width) {
        rect.x += 0.2;
      }
    }

    if (e.code === "ArrowLeft") {
      if (rect.x > 0) {
        rect.x -= 0.2;
      }
    }
  });

  draw();

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
