const buttons = document.querySelectorAll(".button");
const bucket = document.querySelector(".bucket");

const handleMousePosition = (e) => {
  const mousePosX = e.clientX;

  console.log(mousePosX);

  movingBucket(mousePosX);
};

const movingBucket = (x) => {
  bucket.style.left = `${x}px`;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => handleMousePosition(e));
});
