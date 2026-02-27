// substring  in javavscript

let text = "Hello world";
let result = text.substring(0, 5);
console.log(result);

//ex:2

text = "hello world";
result = text.substring(6);
console.log(result);

//Ex;3
text = "Hello world";
result = text.substring(-3, 5);
console.log(result);

//ex:4
let longtext = "the concept of immutability is cruicial when you are working";
let truncatedtext = longtext.substring(0, 20) + "...";
console.log(truncatedtext);
