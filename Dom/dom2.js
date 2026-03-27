let para=document.getElementsByTagName('p')
console.log(para);

const parent=para[0].parentNode;
console.log(parent);
parent.style.backgroundColor="purple"
parent.style.padding="10px"
parent.style.color="#fff";


let head=document.getElementsByTagName('h2');
console.log(head);
let parent2=head[0].parentNode;
console.log(parent2);
parent2.style.backgroundColor="lightgreen"
parent2.style.padding="30px";

