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
parent2.style.margin="30px";
parent2.style.padding="10px"
parent2.style.textAlign='center'

//firstchild 

let section=document.getElementsByTagName('section')
console.log(section);
let fchild=section[0].firstElementChild
console.log(fchild);
fchild.style.color="brown"

let lchild=section[0].lastElementChild;
console.log(lchild);
lchild.style.backgroundColor="blue";
lchild.style.borderRadius="10px"

