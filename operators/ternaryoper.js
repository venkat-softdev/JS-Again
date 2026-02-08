// ternary operator in javascript 
let age=20;
let aligible=age>=18?"eligble to vote":"not eligble to note"
console.log(aligible);

// ex:2

 age=26;
 const beverage=age>=21?"Beer":"Juice";
 console.log(beverage);
 
//Ex:3
const greeting=(person)=>{
    const name=person?person.name:"stranger"
    return `venkat , ${name}`
}
console.log(greeting({name:"Alice"}));

// ex:4
let isloggedIn=true;
let message=`status :${isloggedIn ?"online":"offline"}`;
console.log(message);

//Ex:5
function sayhello() {
    console.log('hello');
    
}
function saygoodbye() {
    console.log("Goodbye!");
    
}
let isleaving=true;
isleaving?saygoodbye():sayhello();

//Ex:6
let score=95;
let grade=(score>90)?"A Grade":(score >80)?"B Grade":(score >70)?"C Grade":"Fail"
console.log(grade);
