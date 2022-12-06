const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let isPlaying = true;
let level = "easy";

let x = 0;
let y = 0;

const array = [];
const snakeArray = [];

let i = 0;
while (i <= 673) {
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

// const keyHandler = (snake, type) => {
//   console.log(snake, type);
// };
//
// document.addEventListener("keydown", (e) => {
//   if (e.code === "ArrowUp") {
//     keyHandler(snakeArray, "ArrowUp");
//   } else if (e.code === "ArrowDown") {
//     keyHandler(snakeArray, "ArrowDown");
//   } else if (e.code === "ArrowRight") {
//     keyHandler(snakeArray, "ArrowRight");
//   } else if (e.code === "ArrowLeft") {
//     keyHandler(snakeArray, "ArrowLeft");
//   }
// });

const snakeColor = (snakeBody, type) => {
  if (type === "color") {
    ctx.fillStyle = "red";
    ctx.fillRect(snakeBody.x, snakeBody.y, 20, 20);
  }

  if (type === "clear") {
    ctx.clearRect(snakeBody.x, snakeBody.y, 20, 20);

    ctx.strokeStyle = "gray";
    ctx.strokeRect(snakeBody.x, snakeBody.y, 20, 20);
  }
};

const snakeMove = () => {
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

snakeMove();

// TODO: HANDLE SNAKE MOVEMENT
