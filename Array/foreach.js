// foreach in array methods javascript 
/* in javascript foreach method execute a provied 
function once for each array elements.

its has three arugments elements,index,array
syntax:array.forEach()

*/

//ex:1
const fruits=['apple','orange','cherry'];

fruits.forEach((fruit)=>{
    console.log(fruit);
    
})

//ex:2
let nums=[10,20,30,40,50];
let total=0;
nums.forEach((num)=>{
    total+=num
})
console.log(total);

//ex:3
let doublenum=[];
let numbers=[10,20,30,40,50];
numbers.forEach((nums)=>{
    doublenum.push(nums*2)
})
console.log(doublenum);
