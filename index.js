const display = document.querySelector(".screen");
const buttons = document.querySelectorAll(".button");
console.log(buttons);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.value === "=") {
      display.value = eval(display.value);
    } else if (e.target.value == "ac") {
      display.value = "";
    } else if (e.target.value == "de") {
      display.value = display.value.slice(0, -1);
    } else if (e.target.value == "%") {
      display.value = parseFloat(eval(display.value)) * 100;
    } else {
      display.value += e.target.value;
    }
  });
});
