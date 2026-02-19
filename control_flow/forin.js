// for in loop javavscript

let user = {
  name: "venkat",
  age: 35,
  city: "vadadlur",
};

for (const prop in user) {
  console.log(prop + ":" + user[prop]);
}

//Ex:2
let person = {
  name: "ajai",
  age: 39,
};

for (const val in person) {
  console.log(val, person[val]);
}

//Ex:3
const numbers = [10, 20, 30, 40, 50];
let txt = "";

for (const res in numbers) {
  txt = txt + numbers[res] + " ";
}
console.log(txt);

//Ex:4

let obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (const out in obj) {
  console.log(out + ":" + obj[out]);
}
