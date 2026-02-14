// javascript starting 

const btn=document.querySelector("#btn");
btn.addEventListener("click",check);

function check() {
    
    let num=Number(document.querySelector("#num").value);

    if (num%2==0) {
        let answer=document.querySelector("#answer")
        answer.textContent="Even Number"
        answer.style.display="block"
    } else {
        answer.textContent="Odd Number"
        answer.style.display="block"
    }
}