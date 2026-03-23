// object hasOwn property method in javascript
/**
 in javavscript object.hasOwn() is a method it used to check 
 whether of objects a specific property as a own property
 */

//ex:1
let user = {
  fname: "venkat",
};
console.log(Object.hasOwn(user, "fname"));

//ex:2 no property

let $user = {
  name: "kakashi",
  age: 20,
};
console.log(Object.hasOwn($user, "city"));

//ex:3 prototype case

let person = {
  name: "venkat",
};
let users = Object.create(person);

console.log(Object.hasOwn(person, "name"));

//ex:4 add own property

let $perosn = {
  name: "yuva",
};
let user1 = Object.create($perosn);
user1.age = 20;

console.log(Object.hasOwn($perosn, "age"));

//ex:5

let persons = {
  name: "venkatvp",
};
let mem = Object.create(persons);
console.log("name" in persons);
console.log(Object.hasOwn(persons, "name"));
