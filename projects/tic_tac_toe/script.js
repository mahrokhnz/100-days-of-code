const buttons = document.querySelectorAll(".button");
const modal = document.querySelector(".modal");
const cells = document.querySelectorAll(".cell");
const cellsParent = document.querySelector(".wrapper");

const marks = ["X", "O"];
const cellNumbers = cellsParent.children;

let userMark = "";
let gameMark = "";

const userFillingCells = (mark) => {
  cells.forEach((cell) => {
    if (cell.textContent.length <= 0) {
      cell.addEventListener("click", () => {
        cell.textContent = mark;
        console.log(cell.textContent.length);
        gameFillingCells(gameMark);
        // CONTROL USER CLICK ON COMPLETED CELLS
      });
    }
  });
};

const gameFillingCells = (mark) => {
  const corners = [
    cellNumbers[0],
    cellNumbers[2],
    cellNumbers[6],
    cellNumbers[8],
  ];

  if (
    corners[0].textContent.length === 0 ||
    corners[1].textContent.length === 0 ||
    corners[2].textContent.length === 0 ||
    corners[3].textContent.length === 0
  ) {
    const random = Math.floor(Math.random() * corners.length);
    if (corners[random].textContent.length === 0) {
      corners[random].textContent = gameMark;
    } else {
      let newCorners = [...corners];
      console.log(newCorners);
      // REMOVE COMPLETED INDEX FROM RANDOM
      // FIND A NEW RANDOM
    }
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.style.opacity = "0";
    modal.style.zIndex = "0";

    userMark = button.textContent;
    const index = marks.indexOf(userMark);

    if (index + 1 < marks.length) {
      gameMark = marks[index + 1];
    } else {
      gameMark = marks[index - 1];
    }

    userFillingCells(userMark);
    gameFillingCells(gameMark);
  });
});
