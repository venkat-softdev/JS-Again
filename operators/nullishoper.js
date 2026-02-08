// Nullish operator in js 

const a=null??"no value";
console.log(a);

const b=null??45;
console.log(b);


//Ex:2
const user={name:"venkat"};
console.log(user);
console.log(user.city);
user.city??='salem'
console.log(user);
