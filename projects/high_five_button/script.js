const button = document.querySelector(".buttonContainer");
const text = document.querySelector(".text");
const leftHand = document.querySelector(".leftHand");
const rightHand = document.querySelector(".rightHand");

button.addEventListener("click", () => {
  text.classList.add("hidingText");
  leftHand.classList.add("showingLeftHand");
  rightHand.classList.add("showingRightHand");
});
