document.title="venkat javascript"
console.dir(document);

let h1=document.getElementById('h1')
h1.style.color="gold"
h1.style.backgroundColor="teal"
h1.style.padding="10px"
h1.style.borderRadius="5px"

let box=document.querySelector('.box')
box.style.padding="10px"
box.style.backgroundColor="grey"
box.style.color="#fff"
box.style.width="500px"
box.style.height="300px"
box.style.margin="10px"
box.style.borderRadius="10px"


let para=document.getElementsByTagName("h4")
for (let i = 0; i < para.length; i++) {
   
    para[i].style.color="deeppink"
    
}

let p=document.querySelectorAll('h4')
p.forEach((ele)=>{
    ele.style.color="green"
})


let ul=document.querySelectorAll('#ul')

let list=document.querySelectorAll('li')
console.log(list);

let element=document.createElement('li')
element.innerHTML="javascript"
list[0].parentNode.appendChild(element);

list.forEach((value)=>{
    value.style.color="deeppink"
})