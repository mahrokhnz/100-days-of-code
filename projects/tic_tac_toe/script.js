const markers = document.querySelectorAll(".button");
const modal = document.querySelector(".modal");
const cells = document.querySelectorAll(".cell");
const text = document.querySelector(".text");

let playerMarker;
let gameMarker;
let isActive = false;

const userFillingCells = () => {
  cells.forEach((cell) => {
    text.textContent = "Your Turn!";
    cell.addEventListener("click", () => {
      if (isActive && cell.childNodes.length === 0) {
        cell.textContent = playerMarker;
        gameFillingCells(gameMarker);
        winnerHandler();
      }
    });
  });
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

  winnerHandler();
  if (isActive) {
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
  }
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

  //MAKE IT SIMPLE

  for (let i = 0; i < winnerArrays.length; i++) {
    if (
      winnerArrays[i].every((element) =>
        element.textContent.includes(gameMarker)
      )
    ) {
      isActive = false;
      text.textContent = "Game Over!";
    } else if (
      winnerArrays[i].every((element) =>
        element.textContent.includes(playerMarker)
      )
    ) {
      isActive = false;
      text.textContent = "You Won!";
    }
  }
};

markers.forEach((marker) => {
  marker.addEventListener("click", () => {
    modal.style.opacity = "0";
    modal.style.zIndex = "0";

    playerMarker = marker.textContent;
    gameMarker = playerMarker === "X" ? "O" : "X";

    isActive = true;

    userFillingCells();
    gameFillingCells();
  });
});
