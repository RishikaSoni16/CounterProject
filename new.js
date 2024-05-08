let button1 = document.getElementById("b1");
let button2 = document.getElementById("b2");
let button3 = document.getElementById("b3");
let input = document.getElementById("int");
let count = 0;

function updateCountAndUI() {
  input.value = count;
  document.getElementById("para").style.color = count < 0 ? "red" : "black";
  button3.style.display = count === 0 ? "none" : "inline";
}

button1.addEventListener("click", () => {
  count--;
  updateCountAndUI();
});

button2.addEventListener("click", () => {
  count++;
  updateCountAndUI();
});

button3.addEventListener("click", () => {
  count = 0;
  updateCountAndUI();
});
