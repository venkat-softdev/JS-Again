// join method in array javascript 
/**
 in Javscript join method join all elements of an array into a string using a specified separator 
 if no seprator is provided it's default comma;
 syntax:
 array.join(seprator)
 */

 //Ex:1
 const products=['pen','pencil','scale','eraser'];
 console.log(products.join('|'));
 
 console.log(products.join());
 
 //ex:2
 const matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
 ]
 console.log(matrix.join("|"));
 
 //ex:3
 const arr=[];
 arr.push(1,[3,arr,4],2);
 console.log(arr.join(';'));
 
 //ex:4
 const a=['wind','water','fire'];
 console.log(a.join());
 console.log(a.join(','));
 console.log(a.join('+'));
 console.log(a.join(''));
 
 
 
 