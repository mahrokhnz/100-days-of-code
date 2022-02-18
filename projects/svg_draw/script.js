const svg = document.querySelector(".svg");
const board = document.querySelector(".board");

const firstMousePos = { x: 0, y: 0 };
const secondMousePos = { x: 0, y: 0 };

let isDrawing = false;

let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
svg.appendChild(line);

board.addEventListener("mousedown", (e) => {
  firstMousePos.x = e.pageX || e.clientX;
  firstMousePos.y = e.pageY || e.clientY;

  line.setAttribute("x1", firstMousePos.x);
  line.setAttribute("y1", firstMousePos.y);

  console.log(firstMousePos);

  isDrawing = true;
});

board.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    secondMousePos.x = e.pageX || e.clientX;
    secondMousePos.y = e.pageY || e.clientY;

    line.setAttribute("x2", secondMousePos.x);
    line.setAttribute("y2", secondMousePos.y);

    line.setAttribute("stroke", "#fff");
    line.setAttribute("stroke-width", "1");

    console.log(secondMousePos);
  }
});

document.addEventListener("mouseup", () => {
  isDrawing = false;
});
