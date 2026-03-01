// splice in array methods javacsript 
/*
In javacsript splice method modify an array 
by adding,removing and replacing elements at specified index.

its is mutating method to modify original array 

syntax:
array.splice()
*/

//EX:1

const n1=[1,2,3,4,5,6,7,8,9,10];
console.log(n1.splice(2));

console.log(n1);

//Ex:2
const n2=[1,2,3,4,5,6,7,8,9,10];
console.log(n2.splice(2,2));

console.log(n2);

//Ex:3
const n3=[1,2,3,4,5,6,7,8,9,10];
console.log("Removed items:"+n3.splice(2,2,25,36));
console.log("after elements:"+n3);

// Ex:4
const n4=[1,2,3,4,5,6,7,8,9,10];
console.log(n4.splice(2,0,100,300));
console.log(n4);

