/**
  createlement
  appenedchild
  insertbefore
  removechild
  remove
  cleannode

 */

  let para=document.createElement('p')
  para.innerText="Hi im venkat";
  console.log(para);
  para.style.color="blue"
  
  const body=document.querySelector('body')
  body.appendChild(para);

  let h2=document.createElement('h2')
  h2.innerHTML="javascript is a high level interpreted programming <i>language</i>"
  body.appendChild(h2)
  h2.style.color="deeppink"

let head=document.createElement('h1');
head.innerHTML="This is Heading"
head.style.color="brown";
body.insertBefore(head,para);


let btn = document.querySelectorAll('.btnremove');

btn.forEach((button)=>{
    button.addEventListener('click',function () {
       const tr= button.parentNode.parentNode
       tr.remove();

        
       
       
    })
});


