// javscript starting 

const btn=document.querySelector("#addtask");
const deletebtn=document.querySelector("#deletebtn");

btn.addEventListener("click",taskadd)

function taskadd() {
    let taskvalue=document.querySelector("#taskinput").value;

    if (taskvalue ==="") {
        alert("Please Enter a Task!")
        return
    }

    let li=document.createElement("li");
    li.innerText=taskvalue;

    deletebtn.innerText="Delete";
    deletebtn.onclick=function () {
        li.remove()
    };

    li.appendChild(deletebtn);
    let tasklist=document.querySelector("#tasklist");
    tasklist.appendChild(li);

    document.getElementById("taskinput").value=""
}
