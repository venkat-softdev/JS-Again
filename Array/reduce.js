// Reduce in array methods javacsript 
/*
In javascript reduce() method reduce an array to a single value using callback function.
the callback function accumulates a result based on provided logic.

syntax:
array.reduce(callback,initialvalue)
*/

//Ex:1

let numbers=[1,2,3,4,5];
let sum=numbers.reduce((accumulator,value)=>{
    return accumulator+value
});
console.log(sum);

//Ex:2
let nestedarray=[[1,2],[3,4],[5,6]];
let flattenedArry=nestedarray.reduce((accumulator,values)=>{
    return accumulator.concat(values)
})
console.log(flattenedArry);

//Ex:3
let colors=['red','blue','green','red','yellow'];

let colorCount=colors.reduce((accumulator,currentvalue)=>{
    if (currentvalue in accumulator) {
        accumulator[currentvalue]++;
    }
    else{
        accumulator[currentvalue]=1
    }
    return accumulator
},{})
console.log(colorCount);

//Ex:4
const array=[1,2,3,4,5];
const initialvalue=0;
const sumwithvalue=array.reduce((acc,value)=>{
    return acc+value
})
console.log(sumwithvalue);
