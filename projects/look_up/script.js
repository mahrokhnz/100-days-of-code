const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener("mousemove", (e) => {
  const xp = e.pageX;
  const yp = e.pageY;

  drawEyes(canvas.width / 2, canvas.height / 2, 150, xp, yp);
});

function drawEye(x, y, size = 100, lx = null, ly = null) {
  lx = lx === null ? x : lx;
  ly = ly === null ? y : ly;

  const a = Math.atan2(ly - window.innerHeight / 2, lx - window.innerWidth / 2);
  const d = Math.hypot(lx - window.innerWidth / 2, ly - window.innerHeight / 2);
  const maxD = Math.hypot(window.innerWidth / 2, window.innerHeight / 2);

  const bx = Math.cos(a) * ((size * 3) / 5) * (d / maxD);
  const by = Math.sin(a) * ((size * 3) / 5) * (d / maxD);

  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.lineWidth = 20;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x + bx, y + by, size / 4, 0, Math.PI * 2);
  ctx.fillStyle = "#000";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(x + bx + size / 14, y + by - size / 14, size / 20, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
}

function drawEyes(x, y, size, xp = null, yp = null) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawEye(x - size - 50, y, size, xp, yp);
  drawEye(x + size + 50, y, size, xp, yp);

  ctx.beginPath();
  ctx.bezierCurveTo(x - 50, y, x, y - 50, x + 50, y);
  ctx.lineWidth = 15;
  ctx.stroke();
}

drawEyes(canvas.width / 2, canvas.height / 2, 150);
