// push in array method javacsript 
/**
 in javscript push() method add one or more elements in end of the array
 its modify original array and returns newlength of array 
 syntax:
 array.push()  
 */

 //ex:1
 let n=[1,2,3,4,5];
 console.log(n.push(6));
 console.log(n);
 
 //ex:2
 const sports=['soccer','baseball'];
 console.log('before:'+sports);
 
 const total=sports.push('football','volleyball')
 console.log('After :'+sports);
 