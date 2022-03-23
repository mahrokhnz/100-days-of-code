const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

let isMoving = false;

//FULL SCREEN CANVAS

ctx.width = window.innerWidth;
ctx.height = window.innerHeight;

ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// let squareWidth = 5;
// let squareCountInWidth = Math.ceil(ctx.width / squareWidth);
// let squareCountInHeight = Math.ceil(ctx.height / squareWidth);

const coordsArray = [];

for (let i = 0; i <= window.innerWidth; i++) {
  coordsArray.push(20 * i);
}

coordsArray.map((coordArray) => {
  ctx.beginPath();
  ctx.moveTo(coordArray, 0);
  ctx.lineTo(coordArray, window.innerHeight);
  ctx.stroke();
  ctx.strokeStyle = "#535c68";
});

coordsArray.map((coordArray) => {
  ctx.beginPath();
  ctx.moveTo(0, coordArray);
  ctx.lineTo(window.innerWidth, coordArray);
  ctx.stroke();
  ctx.strokeStyle = "#535c68";
});

canvas.addEventListener("mousedown", (e) => {
  const x = e.pageX || e.clientX;
  const y = e.pageY || e.clientY;

  ctx.fillRect(0, 0, x, y);
  ctx.fill();
  ctx.fillStyle = "red";

  isMoving = true;
});
