let body=document.querySelector('body');
body.style.fontFamily="poppins"

let clockdiv=document.querySelector('.clock');

function clock() {
    let date=new Date()
    let time=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    clockdiv.innerHTML=time;
}

setInterval(() => {
    clock()
}, 1000);

clockdiv.style.color="#fff"
clockdiv.style.textAlign="center"
clockdiv.style.fontSize="100px"
clockdiv.style.fontWeight="900"
clockdiv.style.backgroundColor="blue";


// let btnadd=document.querySelector("#btnadd");
// let btnremove=document.querySelector("#btnremove");
// let btntoggle=document.querySelector("#btntoggle");
// let box=document.querySelector('.box')
// btnadd.addEventListener('click',function () {
   
//     box.classList.add('new-color');
    
// })

// btnremove.addEventListener('click',function (params) {
    
//     box.classList.remove('new-color')
// })

// btntoggle.addEventListener('click',function (params) {
    
//     box.classList.toggle('new-color')
// })



let btnclick = document.querySelector('#btnclick');
const input = document.querySelector('input');

btnclick.addEventListener('click', function () {
    const value = input.value;
    console.log(value);
});