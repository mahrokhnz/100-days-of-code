const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

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
  direction: "right",
  cellPositions: [array[0], array[1], array[2], array[3]],
  head: { x: 60, y: 0 },
  tail: { x: 0, y: 0 },
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
  if (snake.direction === "up") {
    clearInterval(interval);

    interval = setInterval(() => {
      const snakeTail = snake.cellPositions.shift();
      snake.head = { x: snake.head.x, y: snake.head.y - gridSize };
      snake.cellPositions.push(snake.head);

      // Delete Tail
      snakeColorize(snakeTail, "dead");
      // Define new Head
      snakeColorize(snake.head, "alive");
    }, snake.interval);
  } else if (snake.direction === "right") {
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
  } else if (snake.direction === "down") {
    clearInterval(interval);

    interval = setInterval(() => {
      const snakeTail = snake.cellPositions.shift();
      snake.head = { x: snake.head.x, y: snake.head.y + gridSize };
      snake.cellPositions.push(snake.head);

      // Delete Tail
      snakeColorize(snakeTail, "dead");
      // Define new Head
      snakeColorize(snake.head, "alive");
    }, snake.interval);
  } else if (snake.direction === "left") {
    clearInterval(interval);

    interval = setInterval(() => {
      const snakeTail = snake.cellPositions.shift();
      snake.head = { x: snake.head.x - gridSize, y: snake.head.y };
      snake.cellPositions.push(snake.head);

      // Delete Tail
      snakeColorize(snakeTail, "dead");
      // Define new Head
      snakeColorize(snake.head, "alive");
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
  const isHorizontal = snake.cellPositions.every(
    (cell) => cell.y === snake.cellPositions[0].y
  );

  const isVertical = snake.cellPositions.every(
    (cell) => cell.x === snake.cellPositions[0].x
  );

  switch (key) {
    case "ArrowUp":
      if (!isVertical && snake.direction !== "down") {
        snake.direction = "up";
      }
      break;
    case "ArrowRight":
      if (!isHorizontal && snake.direction !== "left") {
        snake.direction = "right";
      }
      break;
    case "ArrowDown":
      if (!isVertical && snake.direction !== "up") {
        snake.direction = "down";
      }
      break;
    case "ArrowLeft":
      if (!isHorizontal && snake.direction !== "right") {
        snake.direction = "left";
      }
      break;
  }
};

document.addEventListener("keydown", (e) => {
  directionDefiner(e.code);
  snakeMover();
});

const snakeFoodMaker = () => {
  // TODO
  // DEFINE RANDOM GRID
  // WHEN A GRID COLLECTED DEFINE ANOTHER GRID
  // ADD SNAKE LENGTH WHEN COLLECT
};

// TODO
// DEFINE FAIL WHEN ACCIDENT WITH BORDERS
// DEFINE FAIL WHEN ACCIDENT WITH ITSELF
// DEFINE LEVEL AND SPEED
