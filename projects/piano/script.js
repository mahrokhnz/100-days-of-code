const doFa = document.querySelector(".doFa");

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

doFa.addEventListener("click", () => {
  audio.play();
});
