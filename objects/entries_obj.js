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

//ex:4 convert to object again
let users={
    name:'venkat',
    age:22
}

let entries=Object.entries(users);
let obj=Object.fromEntries(entries);

console.log(obj);

//ex:5 filter values

let marks={
    math:90,
    science:40,
    english:80
}
let resultvalue=Object.entries(marks).filter(([key,value])=>{
    return value >=50
})
console.log(resultvalue);

// filter values

let veges={
    carrot:'3kg',
    onion:'5kg',
    tomato:'1kg',
    beans:'1.5kg'
}

let filtervalue=Object.entries(veges).filter(([key,value])=>{
    return value>'1kg'
})
console.log(filtervalue);

//ex:6 modify values

let data={
    a:1,
    b:2
}
let updated=Object.entries(data).map(([key,val])=>{
    return [key,val*2]
})
console.log(updated);
