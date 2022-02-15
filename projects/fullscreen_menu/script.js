const hamburger = document.querySelector(".hamburger");
const span = document.getElementsByTagName("span");

function clickHandler() {
  for (i = 0; i < span.length; i++) {
    span[i].classList.toggle("open");
  }
}

hamburger.addEventListener("click", clickHandler);
