// nested if statement in javaacsript
/* 
if(cond){
if(cond){
....
}
}
*/

let english = 95,
  tamil = 98,
  maths = 75;
let total, avg;

total = english + tamil + maths;
avg = total / 3;
console.log(total);
console.log(avg.toFixed(2));

if (english >= 35 && tamil >= 35 && english >= 35) {
  console.log("result :pass");

  if (avg > 90 && avg <= 100) {
    console.log("A Grade");
  } else if (avg > 80 && avg <= 90) {
    console.log("B Grade");
  } else if (avg > 70 && avg <= 79) {
    console.log("C Grade");
  } else {
    console.log("D Grade");
  }
} else {
  console.log("Result :Fail");
}

// Ex:2

let marks = 85;

if (marks >= 40) {
  if (marks >= 80) {
    console.log("Destinction");
  } else {
    console.log("Passed");
  }
} else {
  console.log("Failed in Exam");
}

//Ex:3

let age = 25;
let hasqualification = true;

if (age >= 18) {
  if (hasqualification) {
    console.log("You are eliegble to apply job");
  } else {
    console.log("you need to gain the required qualification first");
  }
} else {
  console.log("you are not old enough to work");
}

//Ex:4
let username = "admin";
let password = "correctpassword";

if (username === "admin") {
  if (password === "correctpassword") {
    console.log("Access granted .welcome,admin");
  } else {
    console.log("Incorrect Password");
  }
} else {
  console.log("Username not found");
}
