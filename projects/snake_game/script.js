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
  interval: 1000,
};

const snakeCellBuilder = (cell) => {
  ctx.beginPath();
  ctx.rect(cell.x, cell.y, 50, 50);
  ctx.fillStyle = "red";
  ctx.fill();
};

const snakeCreator = () => {
  snake.cells.forEach((cell) => {
    snakeCellBuilder(cell);
  });

  snake.head = snake.cells[snake.cells.length - 1];
};

snakeCreator();

const boundary = (type) => {
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
  snake.head = newHead;

  ctx.clearRect(deadCell.x, deadCell.y, 50, 50);
  groundBuilder();

  snakeCreator();

  // TODO: IF SNAKE GO OVER ITSELF?
};

const randomFood = () => {
  return Math.floor(Math.random(ground.length) * 100);
};

const snakeGrower = () => {
  const snakeTail = snake.cells[0];
  let newSnakeTail;

  if (snake.direction === "right" || snake.direction === "left") {
    newSnakeTail = { x: snakeTail - 50, y: snakeTail };
  }

  if (snake.direction === "top" || snake.direction === "down") {
    newSnakeTail = { x: snakeTail - 50, y: snakeTail };
  }

  snake.cells.unshift(newSnakeTail);

  console.log(snake.cells.length);
};

let randomSquare = ground[randomFood()];

const snakeFeeder = () => {
  if (!snake.cells.includes(randomSquare)) {
    snakeCellBuilder(randomSquare);

    if (snake.head.x === randomSquare.x && snake.head.y === randomSquare.y) {
      snakeGrower();

      randomSquare = ground[randomFood()];
    }
  } else {
    randomSquare = ground[randomFood()];
  }

  requestAnimationFrame(snakeFeeder);
};

requestAnimationFrame(snakeFeeder);

let myInterval;
const snakeMover = (dir) => {
  if (dir === "ArrowUp") {
    clearInterval(myInterval);

    myInterval = setInterval(() => {
      if (boundary("top")) {
        const deadCell = snake.cells.shift();
        const newHead = { x: snake.head.x, y: snake.head.y - 50 };

        snakeDetector("top", deadCell, newHead);
      } else {
        // TODO: WHY HAPPENED?? LOOK AT BOUNDARY
        // TODO: GAME OVER
        console.log("WONT GO TOP");
        clearInterval(myInterval);
      }
    }, snake.interval);
  } else if (dir === "ArrowRight") {
    clearInterval(myInterval);

    myInterval = setInterval(() => {
      if (boundary("right")) {
        const deadCell = snake.cells.shift();
        const newHead = { x: snake.head.x + 50, y: snake.head.y };

        snakeDetector("right", deadCell, newHead);
      } else {
        // TODO: WHY HAPPENED?? LOOK AT BOUNDARY
        // TODO: GAME OVER
        console.log("WONT GO RIGHT");
        clearInterval(myInterval);
      }
    }, snake.interval);
  } else if (dir === "ArrowDown") {
    clearInterval(myInterval);

    myInterval = setInterval(() => {
      if (boundary("down")) {
        const deadCell = snake.cells.shift();
        const newHead = { x: snake.head.x, y: snake.head.y + 50 };

        snakeDetector("down", deadCell, newHead);
      } else {
        // TODO: WHY HAPPENED?? LOOK AT BOUNDARY
        // TODO: GAME OVER
        console.log("WONT GO DOWN");
        clearInterval(myInterval);
      }
    }, snake.interval);
  } else if (dir === "ArrowLeft") {
    clearInterval(myInterval);

    myInterval = setInterval(() => {
      if (boundary("left")) {
        const deadCell = snake.cells.shift();
        const newHead = { x: snake.head.x - 50, y: snake.head.y };

        snakeDetector("left", deadCell, newHead);
      } else {
        // TODO: WHY HAPPENED?? LOOK AT BOUNDARY
        // TODO: GAME OVER
        console.log("WONT GO LEFT");
        clearInterval(myInterval);
      }
    }, snake.interval);
  }
};

document.addEventListener("keydown", (e) => {
  snakeMover(e.key);
});
