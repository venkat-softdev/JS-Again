// function  in javacsript
/**
 In javascript function is a reusable block of code it used to perform
 a specific task.

 its allowing for maintainablity and modularation and realability.
 */

//ex:1
function add(a, b) {
  return a + b;
}
console.log(add(10, 20));

//EX:2
function square(number) {
  return number * number;
}
console.log(square(5));

//ex:3
const multiply = function (x, y) {
  return x * y;
};
console.log(multiply(5, 2));

//ex:4
const sum = (a, b) => {
  console.log(a + b);
  return a + b;
};
console.log(sum(5, 3));

//ex:5
function addvalue() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(addvalue(10, 40, 50));

function total(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(total(10, 20, 30, 40, 50, 60, 70));

//ex:7
function greet() {
  console.log("Hello Venkat");
}
greet();

//ex:8
function printmsg() {
  console.log("Welcome to javacsript functions");
}
printmsg();

//ex:8
function addsum(a, b) {
  return a + b;
}
console.log(addsum(100, 200));

//ex:9
function evenum(num) {
  if (num % 2 == 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
}
evenum(20);

//ex:9
function addnumbers(a, b) {
  return a + b;
}
console.log(addnumbers(30, 70));
  