const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let isPlaying = true;

//FULL SCREEN CANVAS
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//COLORIZE
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//Ball
const ball = {
  x: Math.random() * 500 - 100,
  y: Math.random() * canvas.height,
  r: 16,
  color: "white",
  sx: 8,
  sy: 2,
};

//PADDLES
const paddleR = {
  x: canvas.width - 10,
  y: canvas.height / 2 - 100,
  width: 10,
  height: 200,
};

const paddleL = {
  x: 0,
  y: canvas.height / 2 - 100,
  width: 10,
  height: 200,
};

//RESTART
function playAgain() {
  if (!isPlaying) {
    ctx.font = "30px Arial";
    ctx.fillText(
      "Click Enter for Playing Again!",
      canvas.width / 2 - 200,
      canvas.height / 2 - 50
    );
    ctx.font = "18px Arial";
    ctx.fillText(
      "Handle Paddle Right with Arrow Up and Arrow Down",
      canvas.width / 2 - 200,
      canvas.height / 2
    );
    ctx.font = "18px Arial";
    ctx.fillText(
      "Handle Paddle Left with W and S",
      canvas.width / 2 - 200,
      canvas.height / 2 + 25
    );

    canvas.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        location.reload();
        isPlaying = true;
      }
    });
  }
}

//DRAW BALL AND PADDLES
function draw() {
  if (isPlaying) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.setLineDash([5, 15]);
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.rect(paddleR.x, paddleR.y, paddleR.width, paddleR.height);
    ctx.fill();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.rect(paddleL.x, paddleL.y, paddleL.width, paddleL.height);
    ctx.fill();
  }
}

//ANIMATE BALL AND PADDLES
function animate() {
  if (isPlaying) {
    ball.x += ball.sx;
    ball.y += ball.sy;

    if (ball.y < ball.r || ball.y > canvas.height - ball.r) {
      ball.sy = -ball.sy;
    }

    if (
      ball.y <= paddleR.y + paddleR.height &&
      ball.y >= paddleR.y &&
      ball.x >= paddleR.x - paddleR.width
    ) {
      ball.sx = -ball.sx;
    } else if (ball.x > canvas.width) {
      isPlaying = false;
      playAgain();
    }

    if (
      ball.y <= paddleL.y + paddleL.height &&
      ball.y >= paddleL.y &&
      ball.x <= paddleL.x + paddleL.width + 10
    ) {
      ball.sx = -ball.sx;
    } else if (ball.x < paddleL.width) {
      isPlaying = false;
      playAgain();
    }

    canvas.addEventListener("keydown", function (e) {
      //PADDLE RIGHT
      if (e.code === "ArrowUp") {
        if (paddleR.y > 0) {
          paddleR.y -= 0.2;
        }
      }

      if (e.code === "ArrowDown") {
        if (paddleR.y < canvas.height - paddleR.height) {
          paddleR.y += 0.2;
        }
      }

      //PADDLE LEFT
      if (e.code === "KeyW") {
        if (paddleL.y > 0) {
          paddleL.y -= 0.2;
        }
      }

      if (e.code === "KeyS") {
        if (paddleL.y < canvas.height - paddleL.height) {
          paddleL.y += 0.2;
        }
      }
    });

    draw();
    requestAnimationFrame(animate);
  }
}

requestAnimationFrame(animate);
