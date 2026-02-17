// for of loop in javascript 

let names=['Tiya','Ram','Sam','Raja','Kumar'];

for (const name of names) {
    console.log(name);
    
}

// Ex:2

const array=['a','b','c'];
for (const values of array) {
    console.log(values);
    
}

//Ex:3

const iterable=[10,20,30];
for (let values of  iterable) {
    values += 1;
    console.log(values);
    
}

//Ex:4
let value='boo';
for (const result of value) {
    console.log(result);
    
}