
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

//ex:2
let keys='city'
console.log(user.address?.[keys]);

//ex:3

const user_details={
    userId:'456',
    account:{
        accountNumber:'ABCDE123',
        holder:{
            profile:{
            firstname:'venkat',
            lastname:'vp',
            birthdate:'2006-05-01'
            }
           
        },
        contact:{
            address:{
                city:'vadalur',
                state:'Tamil Nadu',
                country:'India'
            },
            phone:[
                {
                    type:'Home',
                    phoneNumber:'12346889'
                },
                {
                    type:'office',
                    phoneNumber:'987654'
                }
            ]
        }
    }
}
console.log(user_details.account?.holder?.profile?.birthdate);

console.log(user_details.account?.contact?.address?.city);

console.log(user_details.account?.contact?.phone);

user_details.account.name="venkat"

console.log(user_details.account?.name);



//ex:2
let users={
    profile:{
        address:{
            city:'vadalur'
        }
    }
}
console.log(users.profile?.address?.city);
console.log(users.profile?.address?.phone);

