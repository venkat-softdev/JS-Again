// function  in javacsript
/**
 In javascript function is a reusable block of code it used to perform
 a specific task.

 its allowing for maintainablity and modularation and realability.
 */


 //ex:1
 function add(a,b) {
    return a+b
 }
 console.log(add(10,20));
 
 //EX:2
 function square(number){
   return number*number
 }
 console.log(square(5));
 
 //ex:3
 const multiply=function (x,y) {
    return x*y
 }
 console.log(multiply(5,2));
 
 //ex:4
 const sum=(a,b)=>{
    console.log(a+b);
    return a+b
    
 }
 console.log(sum(5,3));
 
 //ex:5
 function addvalue() {
    let total=0;
    for (let i = 0; i < arguments.length; i++) {
        total+=arguments[i]
        
    }
    return total
 }

console.log(addvalue(10,40,50));
