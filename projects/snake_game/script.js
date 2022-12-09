const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// TODO
// FAIL AND STOP GAME
// LEVEL

const snake = {
  direction: "right",
  cellPositions: [],
  bodyLength: 4,
  canTurn: true,
  interval: 1000,
};
const gridSize = 20;
const array = [];

let x = 0;
let y = 0;

let i = 0;

while (i <= 674) {
  array.push({ x: x, y: y });

  ctx.strokeStyle = "gray";
  ctx.strokeRect(x, y, gridSize, gridSize);

  x += gridSize;

  if (x > 520) {
    y += gridSize;
    x = 0;
  }

  i++;
}

// TODO
// MOVE SNAKE BY KEYS (SWITCH AND CASE)
