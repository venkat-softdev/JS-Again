
// optional chaiining in javascript


let user={
    name:'venkat',

    address:{
        city:'vadalur'
    }
    
}
console.log(user);


//using ternaary operator

// let result=user.address ? address:undefined
// console.log(result);

// //option-2
// console.log(user.address && user.address.city);

//using optional chaining 
console.log(user.address?.city);
