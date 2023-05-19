const input = document.querySelector("input");
const addBtn = document.getElementById("addition");
const clearBtn = document.getElementById("clear");

addBtn.addEventListener("click", () => {
  input.value += "+";
});

clearBtn.addEventListener("click", () => {
  input.value = "";
});

function addNumsToInput(num) {
  input.value += num;
}
