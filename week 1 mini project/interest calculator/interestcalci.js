// javascript starrting 

const btn=document.querySelector("#btn");
btn.addEventListener("click",calci);

function calci() {
    
    let p=Number(document.querySelector("#p").value);
    let r=Number(document.querySelector("#r").value);
    let t=Number(document.querySelector("#t").value);

    let si=(p*r*t)/100
    let val=document.querySelector("#si");
    val.innerHTML="simple Interest : "+si;

    val.style.display="block"
}