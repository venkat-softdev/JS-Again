// else if statement in javascript 

/*
if(cond){
....
}else if(cond){
....
}else{
    ....
    }

*/

//ex:1
let number=1;
if (number<0) {
    console.log(number,"number is negative number");
    
}else if (number>0) {
 console.log(number,"number is positive number");
    
} 

else {
    console.log(number,"number is equal to zero");
    
}

//Ex:2
let avg=75;
if (avg>=90&&avg<=100) {
    console.log("Grade A");
    
}else if (avg>=80 && avg<=89) {
    console.log("Grade B");
    
}else if (avg>=70 && avg<=79) {
    console.log("Grade C");
    
}
else{
    console.log("Grade D");
    
}