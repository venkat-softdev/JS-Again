// object assign method in javascript 
// in javascript object.assign() method is used to copy or merge properties from one
//  or more objects into a target objects 


//ex:1
const obj1={
    a:1
}
const obj2={
    b:2
}
const merged=Object.assign(obj1,obj2)
console.log(merged);


//ex:2

let obj={
    a:10
}
console.log(Object.assign([],obj));

//ex:3 mergin objects

let ob1={a:30};
let ob2={b:20};

let result=Object.assign([],ob1,ob2)
console.log(result);
