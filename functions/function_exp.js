// function expression in javascript 
/**
 In javascript function expresssion defines the function as a variable asignment 

 */

 //ex1

 let addvalue=function (a,b) {
    return a+b
 }
 console.log(addvalue(10,20));
 
 //ex:2
 let evenumbers=function (number) {
    
    return number%2==0
 }
 console.log(evenumbers(1));
 
 //ex:3
 let gradechecker=function (mark) {
    if (mark>=90&& mark<=100) {
        console.log('Grade A');
        
    }
    else if (mark>=71&&mark<=89) {
        console.log('Grade B');
        
    }
    else if (mark>=50 && mark<=70) {
        console.log('Grade c');
        
    }
    else{
        console.log('Fail the Exam');
        
    }
   return mark
 }
 console.log(gradechecker(89));
 

 // ex:4
 let eligibletowork=function (age) {
    
    if (age>=20&& age<=60) {
        console.log('eligible to work');
        
    }
    else{
        console.log('not eligible');
        
    }
    return age
 }
 console.log(eligibletowork(10));
 
 