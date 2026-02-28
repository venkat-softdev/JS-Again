// filter in array method javavscript 
/*
In javavscript  filter method create a new array with all elements
that pass a task specified using callback function 
.ts consits three arugments(elements,index,array)
syntax:
array.filter()
*/
//ex:1 
let numbers=[1,2,3,4,5,6,7,8,9,10];
let evennums=numbers.filter((num)=>{
    return num%2==0
})
console.log(evennums);

//ex:2
let users=[
    {name:"venkat",age:20},
    {name:"Yuva",age:15},
    {name:"arish",age:20}
];

let eligible=users.filter((user)=>{
    return user.age>18
})
console.log(eligible);

//ex:3

let words=['cat','monkey','dog','rabbit','elephant'];

let eligiblewords=words.filter((word)=>{
    return word.length>=3&&word.length<=6
})
console.log("That is eligible words:"+ eligiblewords);

//ex:4

let items=[

    {name:'apple',category:'fruits'},
    {name:'onion',category:'vegetable'},
    {name:'banana',category:'fruits'},
    {name:'brinjal',category:'vegetable'}
];

let fruits=items.filter((item)=>{
    return item.category=='fruits'
})
console.log(fruits);

//ex:5
let searchwords=['cat','dog','caterpillar','monkey'];

let findingwords=searchwords.filter((word)=>{
    return word.startsWith('c')
})
console.log(findingwords);

