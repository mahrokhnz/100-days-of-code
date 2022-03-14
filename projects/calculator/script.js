const types = document.querySelectorAll(".type");
const display = document.querySelector(".calculatorScreen");
const backSpace = document.querySelector(".clear");

let beforeNumber, NextNumber;

// const calculatorScreenViewHandler = (type) => {
//   if (type.innerHTML !== ".") {
//     if (type.innerHTML !== "=") {
//       if (calculatorScreen.innerHTML.length > 0) {
//         calculatorScreen.innerHTML += type.innerHTML;
//       } else if (type.innerHTML !== "×" && type.innerHTML !== "÷") {
//         calculatorScreen.innerHTML += type.innerHTML;
//       }
//     }
//   } else {
//     if (!calculatorScreen.innerHTML.includes(".")) {
//       calculatorScreen.innerHTML += type.innerHTML;
//     }
//   }
// };

// // const operators = () => {
// //   if (calculatorScreen.innerHTML.includes("+")) {
// //     const slug = calculatorScreen.innerHTML.substring(calculatorScreen.innerHTML.indexOf("+"));
// //     console.log(slug);
// //   }
// // };
//
// types.forEach((type) => {
//   type.addEventListener("click", (e) => {
//     if (e.target.matches("button")) {
//       const key = e.target;
//       const action = key.dataset.action;
//       const keyContent = key.textContent;
//
//       if (display.textContent !== "0" && action !== "calculate") {
//         display.textContent += keyContent;
//       }
//       if (
//         display.textContent === "0" &&
//         action === "sum" &&
//         action === "division"
//       ) {
//         display.textContent += keyContent;
//       }
//     }
//   });
// });

// backSpace.addEventListener("click", () => {
//   calculatorScreen.innerHTML = calculatorScreen.innerHTML.substring(0, calculatorScreen.innerHTML.length - 1);
// });
