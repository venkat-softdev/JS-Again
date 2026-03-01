// sort in array methods javavscript 
/*

*/

//Ex:1
const names=['venkat','arish','yuva','jigky'];
console.log(names.sort());

//ex:2

let num=[9,100,20,40,50];
console.log(num.sort());
num.sort((a,b)=>{
    return a-b
})
console.log(num);

//ex:2
num=[400,2,600,1000];
num.sort((a,b)=>{
    return b-a
})
console.log(num);

//Ex:3
let users=[
    {name:'venkat',age:20},
    {name:'yuva',age:16},
    {name:'arish',age:19},
    {name:'jigky',age:7}
]
users.sort((a,b)=>{
    return a.age-b.age
})
console.log(users);
