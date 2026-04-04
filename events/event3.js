let body=document.querySelector('body')
body.style.fontFamily='poppins'


//form event in js 

const form=document.querySelector('form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const courses=document.querySelector('#course');
const radiobtn=document.querySelectorAll('input[name="gender"]')
const checkbox=document.querySelector('#agree')
form.addEventListener('submit',function (e) {
    e.preventDefault();
  console.log(`username: ${username.value}`);
  console.log(`Email : ${email.value}`);
  console.log(`course :${courses.value}`);
 
  
  
  
    
})

courses.addEventListener('change',function (event) {
 const selectcourse=event.target.value;    
 console.log(selectcourse);
 
})
form.addEventListener('reset',function (e) {
    console.log('reseted the form values');
    
})

function  venkat () {
  name='venkat'
}
setInterval(() => {

 
   
}, 1000);