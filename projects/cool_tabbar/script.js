const bucket = document.getElementById("bucket");
const colorBall = document.getElementById("colorBall");
const home = document.getElementById("home");
const comment = document.getElementById("comment");
const folder = document.getElementById("folder");
const user = document.getElementById("user");

let buttonArray = [home, comment, folder, user];

const movingBucket = (number) => {
  if (number === 1) {
    bucket.style.left = '40px'
  }
  if (number === 2) {
    bucket.style.left = '165px'
  }
  if (number === 3) {
    bucket.style.left = '290px'
  }
  if (number === 4) {
    bucket.style.left = '415px'
  }
};

buttonArray.forEach((button, index) =>
  button.addEventListener("click", () => movingBucket(index + 1))
);
