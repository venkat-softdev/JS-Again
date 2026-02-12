// javascript starting 

const btn=document.querySelector("#btn");
btn.addEventListener("click",login)

function login() {
    
    let user=document.querySelector("#user").value;
    let pass=document.querySelector("#pass").value;
    let msg=document.querySelector("#msg");

    if (user==="") {
        msg.textContent="Username Required"
        msg.style.display="block"

    }
    else if (pass.length < 6) {
        msg.textContent="Password must be 6 letters"
        msg.style.display="block"
    }
    else {
        msg.textContent="Login Success"
        msg.style.display="block"
    }
}