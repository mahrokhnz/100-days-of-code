const firstImg = document.querySelector(".firstImg");
const secondImg = document.querySelector(".secondImg");
const thirdImg = document.querySelector(".thirdImg");

document.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  const windowPosition = window.scrollY;

  if (
    windowPosition > 0.5 * windowHeight &&
    windowPosition < 1.5 * windowHeight
  ) {
    firstImg.classList.add("active");
  } else {
    firstImg.classList.remove("active");
  }

  if (
    windowPosition > 1.5 * windowHeight &&
    windowPosition < 2.5 * windowHeight
  ) {
    secondImg.classList.add("active");
  } else {
    secondImg.classList.remove("active");
  }

  if (windowPosition > 2.5 * windowHeight) {
    thirdImg.classList.add("active");
  } else {
    thirdImg.classList.remove("active");
  }
});
