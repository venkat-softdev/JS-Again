// uppercase in javascript string methods

//Ex:1
let originalstring='Hello - World';
let uppercasestring=originalstring.toUpperCase();
console.log(uppercasestring);

//Ex:2
let greeting='good morning';
let loudgreeting=greeting.toUpperCase();
console.log(loudgreeting);

//Ex:3
let result='convert this'.toUpperCase();
console.log(result);

//Ex:4
let data=['javavscript' ,'html','css'];
result=data.map((item)=>{
    return item.toUpperCase()
})
console.log(result);
