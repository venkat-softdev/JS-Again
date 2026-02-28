// map in array methods javascript
/* 
In javacsript map method create a new array
by transforming each elements in original array using 
callback function

it's has three arugments(elements,index,array)
syntax:
array.map()
*/

//ex:1
let numbers=[1,2,3,4,5,6,7,8,9,10];
const doublenums=numbers.map((nums)=>{
    return nums*2
})
console.log(doublenums);

//Ex:2
const words=['hello','world'];
const capitalwords=words.map((word)=>{

    return word.toUpperCase()
})
console.log(capitalwords);

//Ex:3
const fruits=['apple','mango'];
const colors=['Red','yellow'];

const fruitcolors=fruits.map((fruit,index)=>{
    return fruit+" - "+colors[index]
})
console.log(fruitcolors);

//Ex:4
numbers=[1,2,3,4,5];
const evennumbers=numbers.map((num)=>{
    return num%2==0
})
console.log(evennumbers);

//Ex:5

const users=[

    {name:'venkat',age:20},
    {name:'sam',age:25},
    {name:'yuva',age:17}
]
const names=users.map((user)=>{
    return user.name
})
console.log(names);

const update=users.map((user)=>{
    return {
        name:user.name,
        age:user.age+1
    }
})
