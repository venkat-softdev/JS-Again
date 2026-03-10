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

//ex:3

let values=[10,20,30,90,50];
let maxi=values[0]

for (let i = 0; i < values.length; i++) {
    
    if (values[i] > maxi) {
        maxi=values[i]
        
    }
    
}
console.log(maxi);
