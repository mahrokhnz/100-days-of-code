const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// TODO
// FAIL AND STOP GAME
// LEVEL

const snake = {
  direction: "",
  cellPositions: [],
  head: { x: 60, y: 0 },
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
const snakeMover = (snakeCells) => {
  // TODO: WHEN DEFINE ALL DIRECTIONS CHANGE IF TO ELSE IF

  if (snake.direction === "up") {
    clearInterval(interval);

    interval = setInterval(() => {
      // Delete Tail
      const snakeTail = snakeCells.shift();
      snakeColorize(snakeTail, "dead");
      // Define new Head
      snake.head = { x: snake.head.x, y: snake.head.y - gridSize };
      snakeCells.push(snake.head);
      snakeColorize(snake.head, "alive");
    }, snake.interval);
  } else if (snake.direction === "right") {
    clearInterval(interval);

    interval = setInterval(() => {
      // Delete Tail
      const snakeTail = snakeCells.shift();
      snakeColorize(snakeTail, "dead");
      // Define new Head
      snake.head = { x: snake.head.x + gridSize, y: snake.head.y };
      snakeCells.push(snake.head);
      snakeColorize(snake.head, "alive");
    }, snake.interval);
  } else if (snake.direction === "down") {
    clearInterval(interval);

    interval = setInterval(() => {
      // Delete Tail
      const snakeTail = snakeCells.shift();
      snakeColorize(snakeTail, "dead");
      // Define new Head
      snake.head = { x: snake.head.x, y: snake.head.y + gridSize };
      snakeCells.push(snake.head);
      snakeColorize(snake.head, "alive");
    }, snake.interval);
  } else if (snake.direction === "left") {
    clearInterval(interval);

    // interval = setInterval(() => {
    // Horizontal & Vertical
    if (snakeCells.every((cell) => cell.y === snake.head.y)) {
      // TODO: should fix
      console.log(snakeCells, "first");
      // Delete Tail
      const snakeTail = snakeCells.pop();
      console.log(snakeTail, "tail");
      snakeColorize(snakeTail, "dead");
      // Define new Head
      snake.head = { x: snake.head.x - gridSize, y: snake.head.y };
      console.log(snake.head, "head");
      snakeCells.unshift(snake.head);
      console.log(snakeCells, "second");
      snakeColorize(snake.head, "alive");
    } else {
      // Delete Tail
      const snakeTail = snakeCells.shift();
      snakeColorize(snakeTail, "dead");
      // Define new Head
      snake.head = { x: snake.head.x - gridSize, y: snake.head.y };
      snakeCells.push(snake.head);
      snakeColorize(snake.head, "alive");
    }
    // }, snake.interval);
  }
};

const snakeCells = [array[0], array[1], array[2], array[3]];

const snakeBuilder = () => {
  // Colorize
  snakeCells.forEach((snakeCell) => {
    snakeColorize(snakeCell, "alive");
  });
  // Give to snake object
  snake.cellPositions = snakeCells;
  // Move snake
  snakeMover(snakeCells);
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
  snakeMover(snakeCells);
});

// TODO
// MOVE SNAKE BY KEYS (SWITCH AND CASE)
// DEFINE MOVEMENT BY DIRECTION (TOP, RIGHT _/, LEFT, BOTTOM)
// IN ARRAY OF SNAKE ELEMENT[0] WILL SHIFT AND HEAD WILL CHANGE ACCORDING TO DIRECTION
// ADD KEY DOWN AND INTERVAL FOR AUTO MOVING
// DEFINE FAIL WHEN ACCIDENT
