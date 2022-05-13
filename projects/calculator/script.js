const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");

let displayArray = [display.value];

const handleInsertNumber = (e) => {
  display.value += e.target.innerText;

  displayArray.push(display.value);
};

const handleInsertOperator = (e) => {
  //Clear
  if (display.value.length > 0 && e.target.innerText === "c") {
    display.value = display.value.slice(0, -1);
  }

  //÷ and ×
  if (
    display.value.length > 0 &&
    (e.target.innerText === "÷" || e.target.innerText === "×")
  ) {
    display.value += e.target.innerText;
  }

  if (
    e.target.innerText !== "c" &&
    e.target.innerText !== "÷" &&
    e.target.innerText !== "×" &&
    e.target.innerText !== "="
  ) {
    display.value += e.target.innerText;
  }

  displayArray.push(display.value);
};

numbers.forEach((number) => {
  number.addEventListener("click", (e) => handleInsertNumber(e));
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => handleInsertOperator(e));
});
