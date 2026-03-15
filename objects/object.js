// object in javascript 
/*
 in javascript object is a compls data type it represent collection of 
 properties and their values.

 syntax:
 object={}
*/

let person={
    name:'venkat',
    age:20,
    city:'vadalur',
}
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// object constructor 

const car=new Object();
car.make='maruthi';
car.model='M800';
car.year=2007;
console.log(car);
console.log(car.model);
