// for loop in javascript

// ex:1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Ex:2

let arr = [];
for (let i = 0; i <= 100; i++) {
  arr.push(i);
}
console.log(arr);

//Ex:3
const fruits = ["apple", "banana", "cheery"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Ex:4
const items=['A','B','C','D'];
for (let i = 0; i < items.length; i++) {
   console.log(items[i]);
   
  
}

//Ex:5
let box=[]
for (let i = 2; i <= 10; i+=2) {
  box.push(i)
  
  
}
console.log(box);

// ex:6
for (let i = 1; i<=3; i++) {
  let row=""
  for (let j = 1; j<=3; j++) {
   row+=(i*j)+" "
    
  }
  console.log(row);
  
  
}