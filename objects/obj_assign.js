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

//ex:4 merge multiple objects

let value1={a:50};
let value2={b:35};
let value3={c:25};

console.log(Object.assign([],value1,value2,value3));

//ex:5 overwrite objects

let val1={a:50};
let val2={a:100};
console.log(Object.assign({},val1,val2));

//ex:6 smae objct modify 

let obj3={a:1};
Object.assign(obj3,{b:2});
console.log(obj3);

//ex:7 shallow copy 

let obj4={
 a:20,
 b:{c:2}
}
let copy=Object.assign({},obj4);
copy.b.c=100;

console.log(obj4.b.c);


//ex:8 combine user data

let user={
    name:'venkat'
}

let details={
    age:21,
    city:'chennai'
}

let fulldata=Object.assign([],user,details)
console.log(fulldata);
