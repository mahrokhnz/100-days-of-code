const markers = document.querySelectorAll(".button");
const modal = document.querySelector(".modal");
const cells = document.querySelectorAll(".cell");
const text = document.querySelector(".text");

let playerMarker;
let gameMarker;

const userFillingCells = () => {
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (cell.childNodes.length === 0) {
        cell.textContent = playerMarker;
        gameFillingCells(gameMarker);
      }
    });
  });

  winnerHandler();
};

const gameFillingCells = () => {
  const cornersCell = [cells[0], cells[2], cells[6], cells[8]];
  let corners = [];

  for (let i = 0; i < cornersCell.length; i++) {
    if (cornersCell[i].childNodes.length === 0) {
      corners.push(cornersCell[i]);
    }
  }

  //MAKE IT SIMPLE

  if (
    cells[0].textContent.includes(gameMarker) &&
    cells[2].textContent.includes(gameMarker) &&
    cells[1].childNodes.length === 0
  ) {
    cells[1].textContent = gameMarker;
  } else if (
    cells[6].textContent.includes(gameMarker) &&
    cells[8].textContent.includes(gameMarker) &&
    cells[7].childNodes.length === 0
  ) {
    cells[7].textContent = gameMarker;
  } else if (
    cells[0].textContent.includes(gameMarker) &&
    cells[6].textContent.includes(gameMarker) &&
    cells[3].childNodes.length === 0
  ) {
    cells[3].textContent = gameMarker;
  } else if (
    cells[2].textContent.includes(gameMarker) &&
    cells[8].textContent.includes(gameMarker) &&
    cells[5].childNodes.length === 0
  ) {
    cells[5].textContent = gameMarker;
  } else if (
    cells[0].textContent.includes(gameMarker) &&
    cells[8].textContent.includes(gameMarker) &&
    cells[4].childNodes.length === 0
  ) {
    cells[4].textContent = gameMarker;
  } else if (
    cells[2].textContent.includes(gameMarker) &&
    cells[6].textContent.includes(gameMarker) &&
    cells[4].childNodes.length === 0
  ) {
    cells[4].textContent = gameMarker;
  } else {
    const random = Math.floor(Math.random() * corners.length);
    corners[random].textContent = gameMarker;
  }

  winnerHandler();
};

const winnerHandler = () => {
  const winnerArrays = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
  ];

  //MAKE IT SIMPLE && FIX && DEFINE BOOLEAN ISACTIVE

  for (let i = 0; i < winnerArrays.length; i++) {
    if (
      winnerArrays[i].every((element) =>
        element.textContent.includes(gameMarker)
      )
    ) {
      text.textContent = "game";
    } else if (
      winnerArrays[i].every((element) =>
        element.textContent.includes(playerMarker)
      )
    ) {
      text.textContent = "player";
    }
  }
};

markers.forEach((marker) => {
  marker.addEventListener("click", () => {
    modal.style.opacity = "0";
    modal.style.zIndex = "0";

    playerMarker = marker.textContent;
    gameMarker = playerMarker === "X" ? "O" : "X";

    userFillingCells();
    gameFillingCells();
  });
});
