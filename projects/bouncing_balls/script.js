const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//FULL SCREEN CANVAS
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//FILL CANVAS
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//CIRCLES
const circles = [
  {
    x: 10,
    y: 75,
    r: 10,
    color: "red",
  },
  {
    x: 60,
    y: 500,
    r: 20,
    color: "purple",
  },
  {
    x: 110,
    y: 300,
    r: 30,
    color: "blue",
  },
];

function drawCircles() {
  const newCircles = [...circles];

  ctx.beginPath();
  newCircles.map((circle) => {
    ctx.fillStyle = circle.color;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false);
  });
}

drawCircles();
