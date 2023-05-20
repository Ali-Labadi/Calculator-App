const input = document.querySelector("input");
const addBtn = document.getElementById("addition");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

inputValues = [];

addBtn.addEventListener("click", () => {
  input.value += "+";
  inputValues.push("+");
});

equalsBtn.addEventListener("click", () => {
  for (i in inputValues) {
  }
});

clearBtn.addEventListener("click", () => {
  input.value = "";
});

function addNumsToInput(num) {
  input.value += num;
  inputValues.push(num);
}
