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
