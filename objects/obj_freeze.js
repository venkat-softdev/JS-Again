// object.freeze method in javascript
/**
  in javascript object.freeze() method that completely prevents the
  change over the objects.
  2. you cannot add,delete and modify properties.
 */

//ex:1
const freezeobj = Object.freeze({ name: "venkat", age: 20 });

freezeobj.name = "yuva";
freezeobj.gender = "male";
console.log(freezeobj);

//ex:2 normal objects
let normalobj = {
  name: "venkat",
  age: 20,
};
normalobj.gender = "male";
normalobj.name = "yuva";
console.log(normalobj);
