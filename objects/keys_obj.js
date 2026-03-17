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
console.log('next');

Object.entries(fruits).forEach((key)=>{
    console.log(key);
    
})

//ex:1
let user={
    name:'venkat',
    age:20,
    city:'vadalur'
}
console.log(Object.keys(user));

//ex:2
// store a variable

let users={
 name:'venkat',
 age:20
}
let keys=Object.keys(users);
console.log(keys);

//ex:3 using loop 

let member={
    name:'venkat',
    age:20
};

let key=Object.keys(member);
key.forEach((keys)=>{
    console.log(keys);
    
})