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
const rect1 = {
  x: canvas.width - 20,
  y: 200,
  width: 10,
  height: 200,
};

const rect2 = {
  x: 20,
  y: 200,
  width: 10,
  height: 200,
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
  ctx.rect(rect1.x, rect1.y, rect1.width, rect1.height);
  ctx.fill();

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.rect(rect2.x, rect2.y, rect2.width, rect2.height);
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

    //Right Rect
    if (e.code === "ArrowUp") {
      if (rect1.y > 0) {
        rect1.y -= 0.2;
      }
    }

    if (e.code === "ArrowDown") {
      if (rect1.y < canvas.height - rect1.height) {
        rect1.y += 0.2;
      }
    }

    //Left Rect
    if (e.code === "KeyW") {
      if (rect2.y > 0) {
        rect2.y -= 0.2;
      }
    }

    if (e.code === "KeyS") {
      if (rect2.y < canvas.height - rect2.height) {
        rect2.y += 0.2;
      }
    }
  });

  draw();

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
