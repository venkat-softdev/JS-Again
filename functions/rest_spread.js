// rest and spread operator in javacsript 

function myfunction(first,second,...venkat) {
    console.log(first);
    console.log(second);
    console.log(venkat);
    
    
    
}
myfunction(10,20,30,40, 50 ,60);

//spread operator
let mynum=[1,2,3,4];
let newarry=[...mynum,5,6];
console.log(mynum);
console.log(newarry);

// ex:2
let mynames=['venkat','aqua'];
let nwename=[...mynames,'yuva','jignesh'];
console.log(mynames);
console.log(nwename);

//ex:3
function myvalues(firstvalue,secondvalue,...thirdvalue) {
    console.log(firstvalue);
    console.log(secondvalue);
   console.log(thirdvalue);
   
    
    return firstvalue+secondvalue;
    
}
console.log(myvalues(10,20,30,40,60));

