// object keys method in javascript 

let fruits={
    name:'banana',
    color:'yellow',
    weight:'10gram'
}
console.log(Object.keys(fruits));
console.log(Object.entries(fruits));

Object.entries(fruits).forEach((fruit)=>{
    console.log(fruit);
    
})

Object.entries(fruits).forEach((key,value)=>{
    console.log(key);
    
})