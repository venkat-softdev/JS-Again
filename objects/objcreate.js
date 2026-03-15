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


