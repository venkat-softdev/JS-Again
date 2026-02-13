// javascript starting 

function table() {
  let n = Number(num.value);
  res.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    res.innerHTML += `${n} x ${i} = ${n*i}<br>`;
  }
}