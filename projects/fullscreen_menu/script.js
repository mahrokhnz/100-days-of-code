const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

function openHandler() {
  header.classList.toggle("open");
  nav.classList.toggle("open");
}

hamburger.addEventListener("click", openHandler);
