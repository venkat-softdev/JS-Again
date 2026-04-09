// class Employee{
//     employeename="venkat";

//     print(){
//         console.log( this.employeename);

//     }
// }

//  let employee=new Employee();

//  console.log(employee.employeename);
//  employee.employeename="yuvaraj";

//  let emp2=new Employee()
//  emp2.employeename="jignesh" ;

//  let emp3=new Employee()
//  emp2.print();

//ES5 example

function Person(params) {
  this.name = this.name;
}

Person.prototype.sayhello = function (params) {
  console.log("hello my name is " + this.name);
};

var person = new Person();
person.name = "venkat";
console.log(person);

person.sayhello();
