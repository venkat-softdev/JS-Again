let body=document.querySelector('body');
body.style.fontFamily="poppins";

let btn=document.querySelector('#btn')
btn.addEventListener('click',function () {
    alert('welcome the javascript events')
})
btn.style.backgroundColor='blue'
btn.style.color="#fff"
btn.style.padding="15px"
btn.style.width="200px"
btn.style.border="none";
btn.style.borderRadius="4px"
btn.style.fontSize="15px"
btn.style.fontWeight="900"

//mouse events in javascript;
/**
 double click
 click
 */

 let btn2=document.querySelector('#dblbtn');
 btn2.addEventListener('dblclick',function () {
 
    alert('This is double click Button')
 })