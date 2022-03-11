const types = document.querySelectorAll(".type");
const screen = document.querySelector(".screen");
const backSpace = document.querySelector(".clear");

const screenViewHandler = (type) => {
  if (type.innerHTML !== ".") {
    if (type.innerHTML !== "=") {
      if (screen.innerHTML.length > 0) {
        screen.innerHTML += type.innerHTML;
      } else if (type.innerHTML !== "×" && type.innerHTML !== "÷") {
        screen.innerHTML += type.innerHTML;
      }
    }
  } else {
    if (!screen.innerHTML.includes(".")) {
      screen.innerHTML += type.innerHTML;
    }
  }
};

types.forEach((type) => {
  type.addEventListener("click", () => {
    screenViewHandler(type);
  });
});

backSpace.addEventListener("click", () => {
  screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
});
