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
class animal{
    constructor(name,species){
        this.name=name;
        this.species=species;
    }
 describe(){
    console.log(`${this.name} is a ${this.species}`);
    
 }
}
const dog=new animal('max','dog');
console.log(dog);
dog.describe()
const cat=new animal('billy','cat')
cat.describe()
console.log(cat);

// ex:2
// class person{
//     constructor(name,city){
//         this.name=name;
//         this.city=city;
//     }
//     detail(){
//         console.log(`${this.name} come from ${this.city} for searching a job`);
        
//     }
// }

// let venkat=new person('venkat','vadalur');
// console.log(venkat);
// venkat.detail()

//ex:3

const member={
    isHuman:false,
    printintro(){
        console.log(`My name is ${this.name}.Am I human? ${this.isHuman}`);
        
    }
}
const me=Object.create(member);
me.name='venkat';
me.isHuman=true;
me.printintro();

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
venkat.mem()