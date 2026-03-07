// arrow function in javascript

//ex:1
const add=((a,b)=>{
    return a+b
})
console.log(add(10,20));

//ex:2
let numbers=[1,2,3,4,5];
let doublevalue=numbers.map((num)=>{
    return num*2
})
console.log(doublevalue);
