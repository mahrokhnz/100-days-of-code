const bucket = document.querySelector(".bucket");
const home = document.getElementById("home");
const comment = document.getElementById("comment");
const folder = document.getElementById("folder");
const user = document.getElementById("user");

let buttonArray = [home, comment, folder, user];

const movingBucket = (number) => {
  if (number === 1) {
    bucket.classList.add("activeHome");
  }
  if (number === 2) {
    bucket.classList.add("activeComment");
  }
  if (number === 3) {
    bucket.classList.add("activeFolder");
  }
  if (number === 4) {
    bucket.classList.add("activeUser");
  }
};

buttonArray.forEach((button, index) =>
  button.addEventListener("click", () => movingBucket(index + 1))
);
