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

boundary = {
  top: snake.head.y > 0 && snake.direction !== "down",
  right: snake.head.x < 450 && snake.direction !== "left",
  down: snake.head.y < 450 && snake.direction !== "top",
  left: snake.head.x > 0 && snake.direction !== "right",
};

console.log(snake.head.x < 450, snake.direction !== "left");

const snakeMover = (dir) => {
  if (dir === "ArrowUp") {
    if (boundary.top) {
      // TODO: NEW HEAD AND BODY
      console.log("WILL GO TOP");
    } else {
      console.log("WONT GO TOP");
    }
  } else if (dir === "ArrowRight") {
    if (boundary.right) {
      // TODO: NEW HEAD AND BODY
      console.log("WILL GO RIGHT");
    } else {
      console.log("WONT GO RIGHT");
    }
  } else if (dir === "ArrowDown") {
    if (boundary.down) {
      // TODO: NEW HEAD AND BODY
      console.log("WILL GO DOWN");
    } else {
      console.log("WONT GO DOWN");
    }
  } else if (dir === "ArrowLeft") {
    if (boundary.left) {
      // TODO: NEW HEAD AND BODY
      console.log("WILL GO LEFT");
    } else {
      console.log("WONT GO LEFT");
    }
  }
};

document.addEventListener("keydown", (e) => {
  snakeMover(e.key);
});
