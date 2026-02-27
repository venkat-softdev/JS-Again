// slice in javavscript

const fruits = ["banana", "orange", "lemon", "apple", "mango"];

const tropical = fruits.slice(2);
console.log(tropical);

//ex:2

const citrus = fruits.slice(1, 3);
console.log(citrus);

//ex:3
const lasttwo = fruits.slice(-2);
console.log(lasttwo);

// ex:4
const middleslice = fruits.slice(-4, -1);
console.log(middleslice);

//Ex:5
let greeting = "hello world,hello again";
let newstring = greeting.replace("hello", "hi");
console.log(newstring);

//Ex:6
let msg = "The color of the sky is  blue.the color of a flower is also blue";
let newmsg = msg.replaceAll("color", "colour");
console.log(newmsg);
