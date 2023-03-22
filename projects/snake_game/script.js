const canvas = document.getElementById("myCanvas");
const score = document.querySelector(".counter");
const finalScore = document.querySelector(".finalCounter");
const gameOver = document.querySelector(".backdrop");
const tryAgain = document.querySelector(".button");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(0, 0, 500, 500);
ctx.strokeStyle = "gray";
ctx.stroke();

let isPlaying = true;

const deadSnake = () => {
  isPlaying = false;
  gameOver.classList.add("active");
  finalScore.innerHTML = snake.score;
};

const ground = [];
const groundBuilder = () => {
  let i = 0;
  let j = 0;
  while (j < 500) {
    while (i < 500) {
      ctx.beginPath();
      ctx.rect(j, i, 50, 50);
      ctx.strokeStyle = "#eeecf3";
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
  score: 0,
};

const snakeCellBuilder = (cell) => {
  ctx.beginPath();
  ctx.rect(cell.x, cell.y, 50, 50);
  ctx.fillStyle = "#a0849d";
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

const removeDeadCell = (cell) => {
  ctx.clearRect(cell.x, cell.y, 50, 50);
  groundBuilder();
};

const snakeDetector = (type, deadCell, newHead) => {
  snake.direction = type;

  snake.cells.push(newHead);
  snake.head = newHead;

  removeDeadCell(deadCell);

  snakeCreator();

  // TODO: IF SNAKE GO OVER ITSELF?
};

const randomFood = () => {
  return Math.floor(Math.random(ground.length) * 100);
};

const intervalUpdater = () => {
  snake.interval = snake.interval - snake.score * 5;
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

  snake.score += 1;
  score.innerHTML = snake.score;
  intervalUpdater();
};

// TODO: MAY APPEAR ON SNAKE CELLS!
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
        if (snake.direction !== "down") {
          deadSnake();
        }
        clearInterval(myInterval);
        snakeMover("ArrowDown");
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
        if (snake.direction !== "left") {
          deadSnake();
        }
        clearInterval(myInterval);
        snakeMover("ArrowLeft");
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
        if (snake.direction !== "top") {
          deadSnake();
        }
        clearInterval(myInterval);
        snakeMover("ArrowUp");
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
        if (snake.direction !== "right") {
          deadSnake();
        }
        clearInterval(myInterval);
        snakeMover("ArrowRight");
      }
    }, snake.interval);
  }
};

const resetGame = () => {
  snake.cells.forEach((cell) => {
    removeDeadCell(cell);
  });

  clearInterval(myInterval);

  gameOver.classList.remove("active");
  snake.score = 0;
  snake.cells = ground.slice(0, 4);
  snake.head = {};
  snake.direction = "right";
  snake.interval = 1000;

  snakeCreator();

  isPlaying = true;
  score.innerHTML = snake.score;
};

document.addEventListener("keydown", (e) => {
  if (isPlaying) {
    snakeMover(e.key);
  }
});

tryAgain.addEventListener("click", () => {
  resetGame();
});
