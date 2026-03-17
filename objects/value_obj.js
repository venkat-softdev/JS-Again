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