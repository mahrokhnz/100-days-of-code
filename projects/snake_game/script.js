const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// TODO
// FAIL AND STOP GAME
// LEVEL
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

const snake = {
  direction: "",
  cellPositions: [array[0], array[1], array[2], array[3]],
  head: { x: 60, y: 0 },
  bodyLength: 4,
  canTurn: true,
  interval: 1000,
};

const snakeColorize = (snakeCell, cell) => {
  if (snakeCell) {
    if (cell === "alive") {
      ctx.fillStyle = "red";
      ctx.fillRect(snakeCell.x, snakeCell.y, 20, 20);
    }

    if (cell === "dead") {
      ctx.clearRect(snakeCell.x, snakeCell.y, 20, 20);

      ctx.strokeStyle = "gray";
      ctx.strokeRect(snakeCell.x, snakeCell.y, 20, 20);
    }
  }
};

let interval;
const snakeMover = () => {
  if (snake.direction === "right") {
    clearInterval(interval);

    interval = setInterval(() => {
      const snakeTail = snake.cellPositions.shift();
      snake.head = { x: snake.head.x + gridSize, y: snake.head.y };
      snake.cellPositions.push(snake.head);
      // Delete Tail
      snakeColorize(snakeTail, "dead");
      // Define new Head
      snakeColorize(snake.head, "alive");
    }, snake.interval);
  } else if (snake.direction === "left") {
    clearInterval(interval);

    interval = setInterval(() => {
      const snakeHead = snake.cellPositions.pop();
      const snakeTail = {
        x: snake.cellPositions[0].x - gridSize,
        y: snake.head.y,
      };
      snake.cellPositions.unshift(snakeTail);
      snake.head = snake.cellPositions[snake.cellPositions.length - 1];
      // Delete Tail
      snakeColorize(snakeHead, "dead");
      // Define new Head
      snakeColorize(snakeTail, "alive");
    }, snake.interval);
  }
};

const snakeBuilder = () => {
  // Colorize
  snake.cellPositions.forEach((snakeCell) => {
    snakeColorize(snakeCell, "alive");
  });

  // Move snake
  snakeMover();
};

snakeBuilder();

const directionDefiner = (key) => {
  switch (key) {
    case "ArrowUp":
      snake.direction = "up";
      break;
    case "ArrowRight":
      snake.direction = "right";
      break;
    case "ArrowDown":
      snake.direction = "down";
      break;
    case "ArrowLeft":
      snake.direction = "left";
      break;
  }
};

document.addEventListener("keydown", (e) => {
  directionDefiner(e.code);
  snakeMover();
});

// TODO
// MOVE SNAKE BY KEYS (SWITCH AND CASE)
// DEFINE MOVEMENT BY DIRECTION (TOP, RIGHT _/, LEFT, BOTTOM)
// IN ARRAY OF SNAKE ELEMENT[0] WILL SHIFT AND HEAD WILL CHANGE ACCORDING TO DIRECTION
// ADD KEY DOWN AND INTERVAL FOR AUTO MOVING
// DEFINE FAIL WHEN ACCIDENT
