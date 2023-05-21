const currOperation = document.querySelector(".current-operations");
const plusBtn = document.getElementById("addition");

function addNumsToInput(num) {
  currOperation.innerText += num;
}
