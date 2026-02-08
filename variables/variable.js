// // variables in javascript 

// let a=10;
// console.log(a);
  
// // 1.scope 
// if (true) {
//     var msg="Hi im venkat";
// }
// console.log(msg);

// //let 
// if (true) {
//     let value="venkat"
//     console.log(value);
    
// }

// // const 
// if (true) {
//     const name="hello welcome to javascript"
//     console.log(name);
    
// }


const btn=document.querySelector("#btn");
const head=document.querySelector("#heading");

btn.addEventListener("click",getfun);

let count=1

function getfun() {
  btn.textContent="Again Click";
  head.textContent=`${count} clicks so far`
  count=count+1
}
