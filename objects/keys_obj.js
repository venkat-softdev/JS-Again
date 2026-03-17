// object keys method in javascript 

/**
  in javascript objects keys method return of an array all keys
  [property name] in object.
 */

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
    
});
let skey=Object.values(member);
skey.forEach((val)=>{
    console.log(skey);
    
});

//ex:4 access values using keys 
let fuser={
    name:'venkat',
    age:20
}
Object.keys(fuser).forEach((key)=>{
    console.log(key,fuser[key]);
    
});
//ex:5 count properties

let suser={
    name:'yuva',
    age:15
}
console.log(Object.keys(suser).length);

//ex:6 (empty object)

let obj={};
console.log(Object.keys(obj));

//ex:7  interview case 

let mem={
    name:'venkat'
}
let store=Object.create(mem);
console.log(Object.keys(store));
 