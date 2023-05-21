const currOperation = document.querySelector(".current-operations");
const prevOperation = document.querySelector(".prev-operations");
const plusBtn = document.getElementById("addition");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");

function addNumsToInput(num) {
  currOperation.innerText += num;
}

plusBtn.addEventListener("click", () => {
  leftSideValue = currOperation.innerText;
  currOperation.innerText += "+";
  prevOperation.innerText = currOperation.innerText;
  currOperation.innerText = "";
});

equalsBtn.addEventListener("click", () => {
  rightSideValue = currOperation.innerText;
  currOperation.innerText = "";
  result = parseInt(leftSideValue) + parseInt(rightSideValue);
  prevOperation.innerText += rightSideValue;
  currOperation.innerText = result;
});

clearBtn.addEventListener("click", () => {
  currOperation.innerText = "";
  prevOperation.innerText = "";
});
