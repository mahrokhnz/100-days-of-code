const accordion = document.querySelector(".accordion");
const about = document.querySelector(".about");

accordion.addEventListener("click", () => {
  accordion.classList.toggle("active");
  about.classList.toggle("active");
});
