// javascript starting 

const btn=document.querySelector("#btn");
btn.addEventListener("click",table)

function table() {
  let n = Number(document.querySelector("#num").value);
  let res=document.querySelector("#res")
  res.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    res.innerHTML += `${n} x ${i} = ${n*i}<br>`;
  }
}