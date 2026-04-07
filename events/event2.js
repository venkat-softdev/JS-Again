let body = document.querySelector("body");
body.style.fontFamily = "poppins";

document.addEventListener('keydown',keyevent)
document.addEventListener('keypress',keyevent);
document.addEventListener('keyup',keyevent);

function keyevent(event) {
    const eventtype=event.type;
    const keycode=event.code;
    const keyname=event.key;
    console.log(`event type : ${eventtype}`);
    console.log(`event code : ${keycode}`);
    console.log(`event name : ${keyname}`);

}

let label = document.querySelector("label");
let input = document.querySelector("input");
let error = document.querySelector("#error");

input.addEventListener("keydown", function (event) {
  const key = event.key;
  console.log(key);

  if (isNaN(key)) {
    error.textContent = "please enter num only";
  } else {
    error.textContent = "";
  }
});
