const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//FULL SCREEN CANVAS
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//CIRCLES
const circles = new Array(15).fill(0).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 20 + 10,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    sx: Math.random() * 10 - 5,
    sy: Math.random() * 10 - 5,
  }));

function drawCircles() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  circles.forEach((circle) => {
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false);
    ctx.fill();
  });
}

function animate() {
  circles.forEach((circle) => {
    circle.x += circle.sx;
    circle.y += circle.sy;

    if (circle.x < circle.r || circle.x > canvas.width - circle.r) {
      circle.sx = -circle.sx
      circle.color = '#' + Math.floor(Math.random() * 16777215).toString(16)
    }

    if (circle.y < circle.r || circle.y > canvas.height - circle.r) {
      circle.sy = -circle.sy
      circle.color = '#' + Math.floor(Math.random() * 16777215).toString(16)
    }
  });

  drawCircles();

  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)


