// concat in javascript string methods

//Ex:1
const str1="venkat";
const str2="vp";

const newstr=str1.concat(" ",str2);
console.log(newstr);

//Ex:2
const letters=['a','b','c'];
const numbers=[1,2,3,];

const combined=letters.concat(numbers)
console.log(combined);

//Ex:3

let firstname="john";
let lastname='Doe';

let fullname=firstname+" "+lastname;
console.log(fullname);

//Ex:4
let score=85;
let result='final score: ' + score + ' points ';
console.log(result);

//Ex:5
let words=['code','is','fun'];
let sentence=words.join(" ");
console.log(sentence);

//ex:6
let items=['apple','banana','cherry'];
let list=items.join(",");
console.log(list);
