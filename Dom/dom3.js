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
  h2.innerText="javascript is a high level interpreted programming language"
  body.appendChild(h2)
  h2.style.color="deeppink"

  