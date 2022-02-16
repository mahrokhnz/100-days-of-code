const hamburger = document.querySelector(".hamburger");
const span = document.getElementsByTagName("span");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const button = document.querySelector(".button");
const logo = document.querySelector(".logo");

function clickHandler() {
  for (i = 0; i < span.length; i++) {
    span[i].classList.toggle("open");
  }
  nav.classList.toggle("open");
  header.classList.toggle("open");
  button.classList.toggle("open");
  logo.classList.toggle("open");
}

hamburger.addEventListener("click", clickHandler);
