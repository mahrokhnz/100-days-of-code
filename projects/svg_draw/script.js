const board = document.querySelector(".board");
const svg = document.querySelector(".svg");

// let getFirstMousePos = {x:}
//
// board.addEventListener("click", (e) => {
//   let getMousePos = [{ x: e.pageX || e.clientX, y: e.pageY || e.clientY }];
//
//   console.log(getMousePos[0]);
//
//   line(getMousePos[0].x, getMousePos[0].y);
// });

// function line(x, y) {
// if (getMousePos.length > 1) {

// let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
// svg.appendChild(line);
// line.setAttribute("x1", "0");
// line.setAttribute("y1", "0");
// line.setAttribute("x2", x);
// line.setAttribute("y2", y);
// line.setAttribute("stroke", "#fff");
// line.setAttribute("stroke-width", "3");

// }
// }

svg.addEventListener("mousedown", (e) => {
  let getFirstMousePos = { x: e.pageX || e.clientX, y: e.pageY || e.clientY };

  svg.addEventListener("mouseup", (e) => {
    let getSecondMousePos = {
      x: e.pageX || e.clientX,
      y: e.pageY || e.clientY,
    };

    // console.log(
    //   getFirstMousePos.x,
    //   getFirstMousePos.y,
    //   getSecondMousePos.x,
    //   getSecondMousePos.y
    // );

    line(
      getFirstMousePos.x,
      getFirstMousePos.y,
      getSecondMousePos.x,
      getSecondMousePos.y
    );
  });
});

board.addEventListener("mousemove", () => {
  if (isDrawing) {
    console.log("hhh");
  }
});

function line(x1, y1, x2, y2) {
  let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  svg.appendChild(line);
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", "#fff");
  line.setAttribute("stroke-width", "3");
}
