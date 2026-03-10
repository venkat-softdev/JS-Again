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

//ex:5
let arr1=[1,2,3,4,5,6,7,8,9,10];
let arr2=arr1.filter((ar)=>{
    return ar % 2 == 0
})
console.log(arr2);

//ex:6
let array1=[1,2,3,4,5,6,7,8,9,10];
let newvalue=[]
array1.forEach((arr)=>{
    if (arr % 2 == 0) {
        newvalue.push(arr)
    }
})
console.log(newvalue);

