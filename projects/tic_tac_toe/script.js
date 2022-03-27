const markers = document.querySelectorAll(".button");
const modal = document.querySelector(".modal");
const cells = document.querySelectorAll(".cell");

let playerMarker;
let gameMarker;

const userFillingCells = (mark) => {
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (cell.childNodes.length === 0) {
        cell.textContent = mark;
        gameFillingCells(gameMarker);
      }
    });
  });
};

const gameFillingCells = (mark) => {
  const cornersCell = [cells[0], cells[2], cells[6], cells[8]];
  let corners = [];

  for (let i = 0; i < cornersCell.length; i++) {
    if (cornersCell[i].childNodes.length === 0) {
      corners.push(cornersCell[i]);
    }
  }

  if (corners.length > 2) {
    const random = Math.floor(Math.random() * corners.length);
    corners[random].textContent = gameMarker;
  } else {
    // THIRD MOVE
  }
};

markers.forEach((marker) => {
  marker.addEventListener("click", () => {
    modal.style.opacity = "0";
    modal.style.zIndex = "0";

    playerMarker = marker.textContent;
    gameMarker = playerMarker === "X" ? "O" : "X";

    userFillingCells(playerMarker);
    gameFillingCells(gameMarker);
  });
});
