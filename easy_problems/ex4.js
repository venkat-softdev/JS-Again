// ex4 in javascript 

//ex:1

function largest(a,b) {
    return a>b?a:b;
}
console.log(largest(90,20));

//ex:2
let arrays=[10,20,30,409,50];
let max=arrays[0];
arrays.forEach((arr)=>{
    if (arr > max) {
        max=arr
    }
})
console.log(max);
