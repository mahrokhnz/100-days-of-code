const button = document.querySelector(".buttonContainer");
const text = document.querySelector(".text");
const leftHand = document.querySelector(".leftHand");
const rightHand = document.querySelector(".rightHand");
const loading = document.querySelector(".loading");

button.addEventListener("click", () => {
  text.classList.add("hidingText");
  leftHand.classList.add("showingLeftHand");
  rightHand.classList.add("showingRightHand");

  setTimeout(() => {
    loading.classList.add("load");
  }, 800);

  setTimeout(() => {
    text.classList.remove("hidingText");
    leftHand.classList.remove("showingLeftHand");
    rightHand.classList.remove("showingRightHand");
    loading.classList.remove("load");
  }, 3000);
});
