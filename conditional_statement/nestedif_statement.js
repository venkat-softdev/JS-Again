// nested if statement in javaacsript
/* 
if(cond){
if(cond){
....
}
}
*/

let english=95,tamil=98,maths=75;
let total,avg;

total=english+tamil+maths;
avg=total/3;
console.log(total);
console.log(avg.toFixed(2));

if (english>=35 && tamil>=35 && english>=35) {
    console.log("result :pass");
    
    if (avg>90 &&avg<=100) {
        console.log("A Grade");
        
    }else if (avg>80 && avg<=90) {
        console.log("B Grade");
        
    }
    else if (avg >70 && avg<=79) {
        console.log("C Grade");
        
    }
    else{
        console.log("D Grade");
        
    }
}
else{
    console.log("Result :Fail");
    
}
