// javascript starting 

const btn=document.querySelector("#btn");
btn.addEventListener("click",check);

let randomnumber=Math.floor(Math.random()*10)+1;

function check() {
    
    let userguess=Number(document.querySelector("#guess").value);
    let result=document.querySelector("#result");

    if (userguess===randomnumber) {
        result.innerHTML="Correct ! you Guessed It"
        result.style.display="block"
    }
    else if (userguess>randomnumber) {
        result.innerHTML="Too High Try again !"
        result.style.display="block"
    }
    else {
        result.innerHTML="Too Low try agin!"
        result.style.display="block"
    }
}