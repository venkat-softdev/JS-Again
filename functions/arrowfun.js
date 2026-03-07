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

//ex:4
let values=[10,20,30,40,50];
let max=values[0];
values.forEach((value)=>{
    if (value>max) {
        max=value
    }
})
console.log(max);

//ex:5
let value=[1,20,30,40,50];
let min=value[0]
value.forEach((val)=>{
    if (val<min) {
        min=val
    }
})
console.log(min);
