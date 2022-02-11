const range = document.querySelector(".range");
const circle = document.querySelector(".circle");

let isDragging = false;
let startMousePos = { x: 0, y: 0 };
let startDraggablePos = { x: 0, y: 0 };

// circle.addEventListener("mousedown", (e) => {
//   startMousePos.x = e.pageX || e.clientX;
//   startMousePos.y = e.pageY || e.clientY;
//
//   const rb = range.getBoundingClientRect();
//
//   startDraggablePos.x = range.offsetLeft - rb.width / 2;
//   startDraggablePos.y = range.offsetTop - rb.height / 2;
//
//   isDragging = true;
// });
//
// document.addEventListener("mousemove", (e) => {
//   if (isDragging) {
//     const x = e.pageX || e.clientX;
//     const y = e.pageY || e.clientY;
//
//     const dx = x - startMousePos.x;
//     const dy = y - startMousePos.y;
//
//     circle.style.left = `${startDraggablePos.x + dx}px`;
//     circle.style.top = `${startDraggablePos.y + dy}px`;
//   }
// });
//
// document.addEventListener("mouseup", () => {
//   isDragging = false;
// });

let alpha1, alpha2;

circle.addEventListener("mousedown", (e) => {
  const x = e.pageX || e.clientX;
  const y = e.pageY || e.clientY;

  const rb = range.getBoundingClientRect();

  const dx = x - (range.offsetLeft + rb.width / 2);
  const dy = rb.height / 2 + range.offsetTop - y;

  alpha1 = (Math.atan2(dy, dx) * 180) / Math.PI;

  isDragging = true;
});

range.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const x = e.pageX || e.clientX;
    const y = e.pageY || e.clientY;

    const rb = range.getBoundingClientRect();

    const dx = x - (range.offsetLeft + rb.width / 2);
    const dy = rb.height / 2 + range.offsetTop - y;

    alpha2 = (Math.atan2(dy, dx) * 180) / Math.PI;

    const rotateAngle = `${alpha1 - alpha2}deg`;

    range.style.transform = `rotate(${rotateAngle})`;
  }
});

range.addEventListener("mouseup", () => {
  isDragging = false;
});
