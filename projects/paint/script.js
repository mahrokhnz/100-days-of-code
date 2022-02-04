const brushColor = document.querySelector(".color");
const brushSize = document.querySelector(".range");
const eraser = document.querySelector(".erase");
const reset = document.querySelector(".reset");
const cursor = document.querySelector(".cursor");
const board = document.querySelector(".board");

const ctx = board.getContext("2d");
let circle = document.createElement("div");

ctx.lineJoin = "round";
setSize(10, true);

let isDrawing = false;
let lx = 0;
let ly = 0;

//MOUSE SIZE
function setSize(s, updateInput = false) {
  s = Math.max(1, Math.min(s, 100));

  ctx.lineWidth = s;

  cursor.style.width = `${s}px`;
  cursor.style.height = `${s}px`;

  if (updateInput) {
    brushSize.value = s;
  }
}

//MOUSE DOWN
board.addEventListener("mousedown", (e) => {
  const x = e.pageX || e.clientX;
  const y = e.pageY || e.clientY;

  lx = x;
  ly = y;

  isDrawing = true;
});

//MOUSE MOVE
document.addEventListener("mousemove", (e) => {
  const x = e.pageX || e.clientX;
  const y = e.pageY || e.clientY;

  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(lx - board.offsetLeft, ly - board.offsetTop);
    ctx.lineTo(x - board.offsetLeft, y - board.offsetTop);
    ctx.closePath();
    ctx.stroke();

    lx = x;
    ly = y;
  }

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

//MOUSE UP
document.addEventListener("mouseup", () => {
  isDrawing = false;
});

//BRUSH COLOR
brushColor.addEventListener("input", (e) => {
  ctx.strokeStyle = e.target.value;
});

//BRUSH SIZE
brushSize.addEventListener("input", (e) => {
  setSize(e.target.value);
});

//RESET
reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, board.width, board.height);
});

//ERASE
eraser.addEventListener("input", (e) => {
  if (e.target.checked) {
    ctx.globalCompositeOperation = "destination-out";
  } else {
    ctx.globalCompositeOperation = "source-over";
  }
});
