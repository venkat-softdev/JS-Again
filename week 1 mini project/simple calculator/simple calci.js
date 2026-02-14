// javascript starting 
const button=document.querySelector("button");
function calculate(op) {
    
    let n1=Number(document.querySelector("#num1").value);
    let n2=Number(document.querySelector("#num2").value);
    let result;

    if (op==='+') {
        result=n1+n2
    }
    else if(op==='-'){
    
        result=n1-n2
    }
    else if (op==='*') {
        result=n1*n2
    }
    else if (op==='/') {
        result=n1/n2
    }

    let output=document.querySelector("#output");
    output.innerHTML="Result :"+ result;
    output.style.display="block"
}
