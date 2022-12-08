const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let isPlaying = true;
let level = "easy";

let x = 0;
let y = 0;

const array = [];
const snakeCellsArray = [];

let i = 0;
while (i <= 674) {
  array.push({ x: x, y: y });

  ctx.strokeStyle = "gray";
  ctx.strokeRect(x, y, 20, 20);

  x += 20;

  if (x > 520) {
    y += 20;
    x = 0;
  }

  i++;
}

const keyHandler = (type) => {
  const snakeHead = snakeCellsArray[snakeCellsArray.length - 1];

  if (type === "ArrowDown") {
    snakeCellsArray.forEach((snakeCell) => {
      snakeCell.y += 20;
    });

    // TODO: SHOULD FIND PROPER ARRAY FOR SNAKE (FIRST MOVE HEAD)
  }

  snakeMove(snakeCellsArray);
};

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowDown") {
    keyHandler("ArrowDown");
  }
});

const snakeColor = (snakeBody, type) => {
  if (snakeBody) {
    if (type === "color") {
      ctx.fillStyle = "red";
      ctx.fillRect(snakeBody.x, snakeBody.y, 20, 20);
    }

    if (type === "clear") {
      ctx.clearRect(snakeBody.x, snakeBody.y, 20, 20);

      ctx.strokeStyle = "gray";
      ctx.strokeRect(snakeBody.x, snakeBody.y, 20, 20);
    }
  }
};

const snakeCellsBuilder = (snakeArray) => {
  snakeMove(snakeArray);
};

const snakeMove = (snakeArray) => {
  let i = 0;

  setInterval(() => {
    if (snakeArray.length <= 3) {
      snakeArray.push(array[i]);
      snakeColor(array[i], "color");
    } else {
      const extraRect = snakeArray.shift();
      snakeColor(extraRect, "clear");
      snakeArray.push(array[i]);
      snakeColor(array[i], "color");
    }

    i++;
  }, 1000);
};

if (isPlaying) {
  snakeMove(snakeCellsArray);
}

// TODO: HANDLE SNAKE MOVEMENT
// DEFINE BOUNDER _/
// MOVE HEAD AND OTHER CELLS
