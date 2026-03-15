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
