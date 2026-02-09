// logical operators in javacsript

// && logical and
// || logical or
// ! logical not

// Ex:1
let mark = 45;
console.log(mark >= 35 && mark <= 100);

let a = 5;
console.log(a == 2 || a == 5);

// ex:2
let age = 20;
let hasId = true;

if (age >= 18 && hasId) {
  console.log("Allowed to enter");
} else {
  console.log("Not Allowed");
}

// Ex:3
let isweekend = false;
let isHoliday = true;

if (isweekend || isHoliday) {
  console.log("It's time for a break!");
} else {
  console.log("Back to work");
}

// Ex:4;
let username = "";
let defaultname = username || "Guest";
console.log("Welcome," + defaultname);
console.log(10 || 20);

// Ex:5
let isloggedin = false;
console.log(!isloggedin);

// Ex::6
let temprature = 31;
console.log(!(temprature > 30));
