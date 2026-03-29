let body=document.querySelector('body');
body.style.fontFamily="poppins"

const h1=document.createElement('h1');
h1.innerHTML="Dom in <i>javascript</i>"
body.appendChild(h1);
h1.style.color="#fff"
h1.style.backgroundColor="blue"
h1.style.padding="20px"
h1.style.textAlign="center"

let clone=h1.cloneNode(true);
body.appendChild(clone)

let clone2=h1.cloneNode(false);
body.appendChild(clone2)

//setinterval 
 let clockdiv=document.querySelector(".clock")
function clock(params) {
  const date=new Date();
  const time=date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds()
  
  clockdiv.innerHTML=time
  
}

 
 setInterval(() => {
    clock()
 }, 1000);

 clockdiv.style.color="#fff"
 clockdiv.style.fontSize="50px"
 clockdiv.style.fontStyle="bold"
 clockdiv.style.textAlign="center"
 clockdiv.style.backgroundColor="deeppink"
 