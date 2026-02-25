// padstart and padend in javacsript 

let a='5';
a=a.padStart(4,0);
console.log(a);

let b='5';
b=b.padEnd(4,0);
console.log(b);

//ex:2

const str='abc';
console.log(str.padStart(10));

//ex:3
let num='5';
let padnum=String(num).padStart(5,'0');
console.log(padnum);

//ex:4
num='123';
padnum=String(num).padStart(6,'0');
console.log(padnum);

//Ex:5
const str2='abc';
console.log(str2.padStart(10,'foo'));

//ex:6
const str3='Hi';
console.log(str3.padEnd(10,'!'));

//Ex:7
const str4='code';
console.log(str4.padEnd(10,'javascript'));
