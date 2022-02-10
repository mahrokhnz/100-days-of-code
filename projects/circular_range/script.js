const range = document.querySelector(".range");
const pointer = document.querySelector(".pointer");
const svg = document.querySelector(".svg");

let isDragging = false;
let startMousePos = { x: 0, y: 0 };
let startDraggablePos = { x: 0, y: 0 };

pointer.addEventListener("mousedown", (e) => {
  startMousePos.x = e.pageX || e.clientX;
  startMousePos.y = e.pageY || e.clientY;

  const pb = pointer.getBoundingClientRect();

  // console.log(pb);

  startDraggablePos.x = pb.left;
  startDraggablePos.y = pb.top;

  isDragging = true;

  // console.log(startMousePos.x, startMousePos.y);
  // console.log(startDraggablePos.x, startDraggablePos.y);
});

svg.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const x = e.pageX || e.clientX;
    const y = e.pageY || e.clientY;

    const dx = x - startMousePos.x;
    const dy = y - startMousePos.y;

    pointer.style.cx = `${startDraggablePos.x + dx}px`;
    pointer.style.cy = `${startDraggablePos.y + dy}px`;
  }
});

svg.addEventListener("mouseup", () => {
  isDragging = false;
});
