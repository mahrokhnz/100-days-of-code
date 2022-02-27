const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

//FULL SCREEN CANVAS
const resize = () => {
  ctx.width = window.innerWidth;
  ctx.height = window.innerHeight;
};

resize();
window.addEventListener("resize", resize);

let squareWidth = 5;
let squareCountInWidth = Math.ceil(ctx.width / squareWidth);
let squareCountInHeight = Math.ceil(ctx.height / squareWidth);

const coordsArray = [
  {
    x: 0,
    y: 0,
  },
  {
    x: 5,
    y: 5,
  },
  {
    x: 10,
    y: 10,
  },
  {
    x: 15,
    y: 15,
  },
];

console.log(squareCountInWidth, squareCountInHeight);

coordsArray.map((coordArray) => {
  ctx.beginPath();
  ctx.moveTo(coordArray.x, 0);
  ctx.lineTo(coordArray.x, coordArray.y);
  ctx.stroke();
});
