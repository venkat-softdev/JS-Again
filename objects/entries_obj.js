// object entries method in javavscript 
let user={
    name:'venkat',
    age:20
}
console.log(Object.entries(user));

//ex:2 store a variable

let member={
    name:'venkat',
    age:21
}
let result=Object.entries(member);
console.log(result);

//ex:3 using loops 

let mem={
    name:'kakashi',
    age:21
}
Object.entries(mem).forEach(([key,value])=>{
    console.log(key,value);
    
})

// using loops
let fruits={
    name:'apple',
    color:'red'
};

Object.entries(fruits).map(([key,value])=>{
    console.log(key,value);
    
   
    
})
