// while loop in javacsript

/*
while(condition){
// code execute
}
*/

// ex:1

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Ex:2

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
console.log("X value :", x);
console.log("N value :", n);

// Ex:3
i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// ex:4

const fruits = ["Apple", "Orange", "Mango"];
let index = 0;

while (index < fruits.length) {
  console.log("I like " + fruits[index]);
  index++;
}

// Ex:5

let inbox = ["Email 1", "Email 2", "Email 3"];

while (inbox.length > 0) {
  let currentmail = inbox.shift();
  console.log("Deleting :" + currentmail);
}

// ex:6

let count = 0;

while (count < 10) {
  count++;

  if (count % 2 == 0) {
    continue;
  }
  console.log(count + " count is a odd number");
}
