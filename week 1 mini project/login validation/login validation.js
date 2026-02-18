// javascript starting

const btn = document.querySelector("#btn");
btn.addEventListener("click", logfun);

function logfun() {
  let username = document.querySelector("#user").value;
  let pass = document.querySelector("#pass").value;
  let msg = document.querySelector("#msg");

  if (username == "") {
    msg.textContent = "Username required";
    msg.style.display = "block";
  } else if (pass.length < 6) {
    msg.textContent = "Password Must be 6 Digits";
    msg.style.display = "block";
  } else {
    msg.textContent = "Login Success";
    msg.style.display = "block";
  }
}
