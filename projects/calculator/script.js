const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");

const handleInsertNumber = (e) => {
  console.log(display.innerHTML);
};

numbers.forEach((number) => {
  number.addEventListener("click", (e) => handleInsertNumber(e));
});
