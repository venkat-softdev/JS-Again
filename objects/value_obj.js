// object values method in javascript 
/**
  in javscript object.value() is a method that returns of an array 
  all the values in object 
 */

  //ex:1 basic

  let user={
    name:'venkat',
    age:20
  }
  console.log(Object.values(user));
  
  let value=Object.values(user)
value.forEach((use) => {
    console.log(use);
    
});

//ex:2

let fuser={
    name:'venkat',
    age:21
}
let values=Object.values(fuser);
console.log(values);

//ex:3 sum values
let marks={
    math:90,
    science:80,
    social:80
}
let total=Object.values(marks).reduce((acc,cvalue)=>{
    return acc+cvalue
},0)
console.log(total);


// ex:4 using sum
let mark={
    tamil:90,
    english:90,
    maths:90
}
let totalvalue=Object.values(mark).reduce((sum,value)=>{
    return sum+value
})
console.log(totalvalue);
