const currOperation = document.querySelector(".current-operations");
const prevOperation = document.querySelector(".prev-operations");
const plusBtn = document.getElementById("addition");
const minusBtn = document.getElementById("subtration");
const mutiplyBtn = document.getElementById("multiplication");
const divideBtn = document.getElementById("division");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");
var operand;

function addNumsToInput(num) {
  currOperation.innerText += num;
}

plusBtn.addEventListener("click", () => {
  operand = "+";
  leftSideValue = currOperation.innerText;
  currOperation.innerText += "+";
  prevOperation.innerText = currOperation.innerText;
  currOperation.innerText = "";
});

minusBtn.addEventListener("click", () => {
  operand = "-";
  leftSideValue = currOperation.innerText;
  currOperation.innerText += "-";
  prevOperation.innerText = currOperation.innerText;
  currOperation.innerText = "";
});

mutiplyBtn.addEventListener("click", () => {
  operand = "*";
  leftSideValue = currOperation.innerText;
  currOperation.innerText += "x";
  prevOperation.innerText = currOperation.innerText;
  currOperation.innerText = "";
});

divideBtn.addEventListener("click", () => {
  operand = "/";
  leftSideValue = currOperation.innerText;
  currOperation.innerText += "÷";
  prevOperation.innerText = currOperation.innerText;
  currOperation.innerText = "";
});

equalsBtn.addEventListener("click", () => {
  rightSideValue = currOperation.innerText;
  currOperation.innerText = "";

  switch (operand) {
    case "+":
      result = parseInt(leftSideValue) + parseInt(rightSideValue);
      break;
    case "-":
      result = parseInt(leftSideValue) - parseInt(rightSideValue);
      break;
    case "*":
      result = parseInt(leftSideValue) * parseInt(rightSideValue);
      break;
    case "/":
      result = parseInt(leftSideValue) / parseInt(rightSideValue);
      break;
    default:
      console.log(operand);
  }

  prevOperation.innerText += rightSideValue;
  currOperation.innerText = result;
});

clearBtn.addEventListener("click", () => {
  currOperation.innerText = "";
  prevOperation.innerText = "";
});
