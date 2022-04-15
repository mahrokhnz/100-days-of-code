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
    color: "yellow",
  },
];

let newCircles = [];
function drawCircles() {
  for (let i = 0; i <= circles.length; i++) {
    newCircles.push(circles[i]);
  }

  ctx.beginPath();
  newCircles.map((circle) => {
    ctx.fill();
    ctx.beginPath();
    if (circle) {
      ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false);
      ctx.fillStyle = circle.color;
    }
  });
  animateCircles();
}

drawCircles();

function animateCircles() {
  console.log(newCircles);
}
