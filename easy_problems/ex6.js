// ex:6 iun javascript 

// find odd or even 

let numbers=[1,2,3,4,5];
let evennums=[];
numbers.forEach((num)=>{
    if (num%2==0) {
        evennums.push(num)
    }
})
console.log(evennums);

//ex:2


let values=[11,20,33,40,55];

let evenvalues = values.filter((val)=>{
    return val % 2 == 0
})

console.log(evenvalues);

let nums=[1,2,3,4,5];
if (nums%2==0) {
    console.log('even');
    
}
else{
    console.log('odd');
    
}

//ex:4
function check(num) {
    if (num%2==0) {
        console.log('evenvalue');
        
    }
    else{
        console.log('oddvalue');
        
    }
}
check(4)
