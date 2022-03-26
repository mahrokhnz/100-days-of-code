const buttons = document.querySelectorAll(".button");
const modal = document.querySelector(".modal");
const cells = document.querySelectorAll(".cell");

const marks = ["X", "O"];

let userMark = "";
let gameMark = "";

const userFillingCells = (mark) => {
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (cell.childNodes.length === 0) {
        cell.textContent = mark;
        gameFillingCells(gameMark);
      }
    });
  });
};

const gameFillingCells = (mark) => {
  const corners = [cells[0], cells[2], cells[6], cells[8]];

  if (
    corners[0].childNodes.length === 0 ||
    corners[1].childNodes.length === 0 ||
    corners[2].childNodes.length === 0 ||
    corners[3].childNodes.length === 0
  ) {
    const random = Math.floor(Math.random() * corners.length);
    if (corners[random].childNodes.length === 0) {
      corners[random].textContent = gameMark;
    } else {
      corners.splice(random, 1);
      const newRandom = Math.floor(Math.random() * corners.length);
      corners[newRandom].textContent = gameMark;
      // IT DOESN'T WORK PROPERLY
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
