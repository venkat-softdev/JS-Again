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

//Ex:3
const name=null??"Anonymous";
console.log(name);

const count=0;
const quantitynullish=count??42;
console.log(quantitynullish);

const quantityOR=count||42;
console.log(quantityOR);


//Ex:4
let users;
console.log(users??"guest");
let data=null
console.log(data??"data not available");

//Ex:5
const response={
    score:0,
    notes:""
}

const displayscore=response.score ?? "no score added";
console.log(displayscore);

const displaynotes=response.notes ?? "no notes";
console.log(displaynotes);

// Ex:6
let firstname=null;
let lastname=undefined;
let nickname="supercoder"

console.log(firstname??lastname??nickname??"Anonymous");



// ex:7
const usersettings={};

usersettings.theme??="dark";
usersettings.fontsize ??=16;
usersettings.theme??="light";
console.log(usersettings);

