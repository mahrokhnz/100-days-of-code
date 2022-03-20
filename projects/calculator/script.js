const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".calculatorScreen");

let firstNumber = "";
let secondNumber = "";
let resultNumber = 0;
let main = "";

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    main += number.textContent;
    display.textContent = main;
    firstNumber = main;

    if (operators) {
      secondNumber = main;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    main = "";
    console.log(firstNumber, secondNumber);
  });
});
