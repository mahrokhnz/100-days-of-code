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
  // for (let i = 0; i <= cornersCell.length; i++) {
  //   if (cornersCell[i].textContent === "") {
  //     corners.push(cornersCell[i]);
  //   }
  // }

  let i = 0;
  do {
    corners.push(cornersCell[i]);
    i++;
  } while (i < cornersCell.length && cornersCell[i].childNodes.length === 0);

  console.log(corners);

  // if (
  //   corners[0].childNodes.length === 0 ||
  //   corners[1].childNodes.length === 0 ||
  //   corners[2].childNodes.length === 0 ||
  //   corners[3].childNodes.length === 0
  // ) {
  const random = Math.floor(Math.random() * corners.length);
  // if (corners[random].childNodes.length === 0) {
  corners[random].textContent = gameMarker;
  // } else {
  //   corners.splice(random, 1);
  //   const newRandom = Math.floor(Math.random() * corners.length);
  //   corners[newRandom].textContent = gameMarker;
  // IT DOESN'T WORK PROPERLY
  // }
  // }
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
