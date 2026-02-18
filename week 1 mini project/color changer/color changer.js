// javascript starting

const btn = document.querySelector("#btn");
btn.addEventListener("click", change);

function change() {
  let randomcolor = "#" + Math.floor(Math.random() * 16777215);
  randomcolor.toString(16);
  document.body.style.backgroundColor = randomcolor;
}
