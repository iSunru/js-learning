let input = document.getElementById("enter");
let button = document.getElementById("btn");
let list = document.getElementById("task");

button.addEventListener("click", function () {
  let jobhelikhahai = input.value;
  let li = document.createElement("li");
  li.textContent = jobhelikhahai;
  if li==="";
  list.appendChild(li);
  input.value = "";
});
