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

//ex:4

let num=[1,2,3,4,5,6,7,8];
let max=num[0];
num.forEach((nums)=>{
    if (nums>max) {
        max=nums
    }
})
console.log(max);

//ex:5
num=[10,20,30,40,2];
let min=num[0];
num.forEach((nums)=>{
    if (nums<min) {
        min=nums
    }
})
console.log(min);

//ex:6
 let numb=[1,2,3,4,5];
total=0
numb.forEach((nums)=>{
    
    total+=nums;
    console.log(total/numb.length);
    
})

//ex:7

let evennums=[];
let values=[1,2,3,4,5,6,7,8,9,10];
values.forEach((val)=>{
    if (val%2==0) {
        evennums.push(val)
    }
})
console.log(evennums);

//ex:8
let persons=['venkat','yuva','arish'];
persons.forEach((person,index)=>{
    persons[index]=person.toUpperCase()
})
console.log(persons);
