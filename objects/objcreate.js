// object create method in javascript 
const proto={
    eligible:function () {
        if (this.age>18) {
            console.log(`${this.name} eligible to vote`);
            
        } else {
            console.log(`${this.name} not eligible for vote`);
            
        }
    }
}
const people=Object.create(proto);
people.name='venkat';
people.age=20;
people.city='vadalur'
console.log(people);
people.eligible()


// using classes 
// class animal{
//     constructor(name,species){
//         this.name=name;
//         this.species=species;
//     }
//  describe(){
//     console.log(`${this.name} is a ${this.species}`);
    
//  }
// }
// const dog=new animal('max','dog');
// console.log(dog);
// dog.describe()
// const cat=new animal('billy','cat')
// cat.describe()
// console.log(cat);

// // ex:2
// // class person{
// //     constructor(name,city){
// //         this.name=name;
// //         this.city=city;
// //     }
// //     detail(){
// //         console.log(`${this.name} come from ${this.city} for searching a job`);
        
// //     }
// // }

// // let venkat=new person('venkat','vadalur');
// // console.log(venkat);
// // venkat.detail()

// //ex:3

// const member={
//     isHuman:false,
//     printintro(){
//         console.log(`My name is ${this.name}.Am I human? ${this.isHuman}`);
        
//     }
// }
// const me=Object.create(member);
// me.name='venkat';
// me.isHuman=true;
// me.printintro();

//ex:4
let person={
    greet() {
        console.log('hello');
        
    }
};

let user=Object.create(person);
user.greet()


//ex:5
let users={
  
    mem() {
        console.log('hello venkat');
        
    }
}
let venkat=Object.create(users);
venkat.mem();

//2.Acess parent property

let animal={
    type:'dog'
}
let pet=Object.create(animal);
console.log(pet.type);

// 3 .add new property 

let persons={
    name:'venkat'
};
let usermember=Object.create(persons);
console.log(usermember.name);
usermember.age=20;
console.log(usermember.age);

//4.add new property;

let fruits={
    name:'apple'
};
let fruit=Object.create(fruits);
fruit.color='red';
console.log(fruit.name);
console.log(fruit.color);

//5.multiple objects

let vehicle={
    wheels:4
};
let car=Object.create(vehicle);
console.log(car.wheels);

//6.multiple objects
let subject={
    name:'tamil'
};
let subname=Object.create(subject);
console.log(subname.name);

//7. method inheritance

let student={
    study(){
        console.log('studying...');
        
    }
}
let s1=Object.create(student);
s1.study();

//8.override property
let change={
    name:'venkat'
};
let value=Object.create(change);
console.log(value.name);
value.name='yuvaraj';
console.log(value.name);

//9.prototype check

let parent={
    a:10
};
let child=Object.create(parent);
console.log(child.a);

//10.add property using descriptor

let use=Object.create({},{
    name:{
        value:'venkat'
    }
})
console.log(use.name);

//11.add property using descriptor

let vegetable=Object.create({},{
   name:{
     value:'tomato'
   }
});

console.log(vegetable.name);
vegetable.name.value='brinjal';
console.log(vegetable.name);

//12.empty object prototype

let obj=Object.create(null);
obj.name='venkat';
console.log(obj.name);

//13 .real lide example
let employee={
    company:'TCS'
}
let emp1=Object.create(employee);
emp1.name='venkat';
console.log('company name :'+emp1.company);
console.log('name :'+emp1.name);

//
let emplo=Object.create({},{
    company:{
       value:'ZOHO'
    }
});
console.log(emplo.company);
emplo.company.value='venkat';
console.log(emplo.company.value);

