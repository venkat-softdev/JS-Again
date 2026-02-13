// javascript starting 

const btn=document.querySelector("#btn");
btn.addEventListener("click",gradecal);

function gradecal() {
    
    const mark=document.querySelector("#mark").value;
    const out=document.querySelector("#out");

    if (mark > 100 || mark <0) {
        out.textContent="Invalid mark"
        out.style.display="block"
    }
    else if (mark >=90) {
        out.textContent="Grade A"
        out.style.display="block";
    }
    else if (mark>=75 && mark<=89) {
        out.textContent="Grade B";
        out.style.display="block"
    }
    else if (mark >=50 &&  mark<=74) {
        out.textContent="Grade C";
        out.style.display="block"
    }
    else {
        out.textContent="Fail"
        out.style.display="block"
    }
}