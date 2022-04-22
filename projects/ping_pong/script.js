const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let isPlaying = true;

//FULL SCREEN CANVAS
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//COLORIZE
ctx.fillStyle = "lightBlue";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//Ball
const ball = {
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: 16,
  color: "white",
  sx: 10,
  sy: 2,
};

//RECT
const rect1 = {
  x: canvas.width - 10,
  y: 200,
  width: 10,
  height: 200,
};

const rect2 = {
  x: 0,
  y: 200,
  width: 10,
  height: 200,
};

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
    ctx.rect(rect1.x, rect1.y, rect1.width, rect1.height);
    ctx.fill();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.rect(rect2.x, rect2.y, rect2.width, rect2.height);
    ctx.fill();
  } else {
    //fit text
    ctx.font = "20px Georgia";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#000000";

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.rect(canvas.width / 2 - 150, canvas.height / 2 - 100, 300, 200);
    ctx.fill();

    ctx.fillText("Attack!", canvas.width / 2 - 150, canvas.height / 2 - 100);

    canvas.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        isPlaying = true;
        location.reload();
      }
    });
  }
}

function animate() {
  if (isPlaying) {
    ball.x += ball.sx;
    ball.y += ball.sy;

    if (ball.y < ball.r || ball.y > canvas.height - ball.r) {
      ball.sy = -ball.sy;
    }

    if (
      ball.y <= rect1.y + rect1.height &&
      ball.y >= rect1.y &&
      ball.x >= rect1.x - rect1.width
    ) {
      ball.sx = -ball.sx;
    } else if (ball.x + ball.r > canvas.width) {
      isPlaying = false;
    }

    if (
      ball.y <= rect2.y + rect2.height &&
      ball.y >= rect2.y &&
      ball.x <= rect2.x + rect2.width
    ) {
      ball.sx = -ball.sx;
    } else if (ball.x - ball.r < 0) {
      isPlaying = false;
    }

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
  console.log(isPlaying);
}

requestAnimationFrame(animate);
