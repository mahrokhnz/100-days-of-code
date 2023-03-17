const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(0, 0, 500, 500);
ctx.strokeStyle = "gray";
ctx.stroke();

const ground = [];
const groundBuilder = () => {
  let i = 0;
  let j = 0;
  while (j < 500) {
    while (i < 500) {
      ctx.beginPath();
      ctx.rect(j, i, 50, 50);
      ctx.strokeStyle = "gray";
      ctx.stroke();

      ground.push({ x: i, y: j });

      i += 50;
    }
    i = 0;
    j += 50;
  }
};

groundBuilder();

snake = {
  cells: ground.slice(0, 4),
  head: {},
  direction: "right",
};

const snakeCreator = () => {
  snake.cells.forEach((cell) => {
    ctx.beginPath();
    ctx.rect(cell.x, cell.y, 50, 50);
    ctx.fillStyle = "red";
    ctx.fill();
  });

  snake.head = snake.cells[snake.cells.length - 1];
};

snakeCreator();

const boundary = (type) => {
  // TODO: DON'T MOVE ON SNAKE BODY!

  if (type === "top") {
    return snake.head.y > 0 && snake.direction !== "down";
  }
  if (type === "right") {
    return snake.head.x < 450 && snake.direction !== "left";
  }
  if (type === "down") {
    return snake.head.y < 450 && snake.direction !== "top";
  }
  if (type === "left") {
    return snake.head.x > 0 && snake.direction !== "right";
  }
};

const snakeDetector = (type, deadCell, newHead) => {
  snake.direction = type;

  snake.cells.push(newHead);

  ctx.clearRect(deadCell.x, deadCell.y, 50, 50);
  groundBuilder();

  snakeCreator();
};

const snakeMover = (dir) => {
  if (dir === "ArrowUp") {
    if (boundary("top")) {
      const deadCell = snake.cells.shift();
      const newHead = { x: snake.head.x, y: snake.head.y - 50 };

      snakeDetector("top", deadCell, newHead);
    } else {
      // TODO: GAME OVER
      console.log("WONT GO TOP");
    }
  } else if (dir === "ArrowRight") {
    if (boundary("right")) {
      const deadCell = snake.cells.shift();
      const newHead = { x: snake.head.x + 50, y: snake.head.y };

      snakeDetector("right", deadCell, newHead);
    } else {
      // TODO: GAME OVER
      console.log("WONT GO RIGHT");
    }
  } else if (dir === "ArrowDown") {
    if (boundary("down")) {
      const deadCell = snake.cells.shift();
      const newHead = { x: snake.head.x, y: snake.head.y + 50 };

      snakeDetector("down", deadCell, newHead);
    } else {
      // TODO: GAME OVER
      console.log("WONT GO DOWN");
    }
  } else if (dir === "ArrowLeft") {
    if (boundary("left")) {
      const deadCell = snake.cells.shift();
      const newHead = { x: snake.head.x - 50, y: snake.head.y };

      snakeDetector("left", deadCell, newHead);
    } else {
      // TODO: GAME OVER
      console.log("WONT GO LEFT");
    }
  }
};

document.addEventListener("keydown", (e) => {
  snakeMover(e.key);
});
