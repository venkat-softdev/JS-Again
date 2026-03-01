// slice in array methods javacsript 
/*
 In javascript slice method create a shallow copy of portion in array 
 without modifying original array.

 this method is non-mutating so no change the original array 
 syntax:
 array.slice()
 */

 //ex:1
 const numbers=[1,2,3,4,5,6,7,8,9,10];
 console.log(numbers.slice(2));
 
 //ex:2
 const animals=['ant','bison','camel','duck','elephant'];
 console.log(animals.slice(2));
 
 console.log(animals.slice(2,4));
 
 console.log(animals.slice(1,5));
 
 console.log(animals.slice(-2));
 
 //ex:3
 const fruits=['Banana','Orange','Lemon','Apple','Mango'];
 const citus=fruits.slice(1,3)
 console.log(citus);
 
//ex:4
