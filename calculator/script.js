const display = document.getElementById("display");
const btn = document.querySelectorAll(".button");
btn.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.value === "ac") {
      display.value = "";
    } else if (button.value === "=") {
      display.value = eval(display.value);
    } else {
      display.value += button.value;
    }
  });
});
