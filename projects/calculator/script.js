const types = document.querySelectorAll(".type");
const display = document.querySelector(".calculatorScreen");
const backSpace = document.querySelector(".clear");

let beforeNumber, NextNumber;

types.forEach((type) => {
  type.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      const key = e.target;
      const action = key.dataset.action;
      const keyContent = key.textContent;

      if (!action || action === "submission") {
        display.textContent += keyContent;
      } else if (display.textContent.length > 0 && action !== "calculate") {
        display.textContent += keyContent;
      }

      if (action === "calculate") {
      }
    }
  });
});
