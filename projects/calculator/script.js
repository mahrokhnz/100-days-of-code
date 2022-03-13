const types = document.querySelectorAll(".type");
const screen = document.querySelector(".screen");
const backSpace = document.querySelector(".clear");

let beforeNumber, NextNumber;

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

const operators = () => {
  if (screen.innerHTML.includes("+")) {
    const slug = screen.innerHTML.substring(screen.innerHTML.indexOf("+"));
    console.log(slug);
  }
};

types.forEach((type) => {
  type.addEventListener("click", () => {
    screenViewHandler(type);
    operators();
  });
});

backSpace.addEventListener("click", () => {
  screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
});
