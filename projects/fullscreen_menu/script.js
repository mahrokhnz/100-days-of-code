const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");

function openHandler() {
  header.classList.toggle("open");
}

hamburger.addEventListener("click", openHandler);
