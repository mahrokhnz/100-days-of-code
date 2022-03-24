const buttons = document.querySelectorAll(".button");
const modal = document.querySelector(".modal");
const cells = document.querySelectorAll(".cell");

let mark = "";

const fillCells = (mark) => {
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      cell.textContent = mark;
    });
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    mark = button.textContent;
    modal.style.opacity = "0";
    modal.style.zIndex = "0";
    fillCells(mark);
  });
});
