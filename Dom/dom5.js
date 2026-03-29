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
clockdiv.style.backgroundColor="blue"