class Employee{
    employeename="venkat";

    print(){
        console.log( this.employeename);
        
        
    }
}

 let employee=new Employee();

 console.log(employee.employeename);
 employee.employeename="yuvaraj";
 
 let emp2=new Employee()
 emp2.employeename="jignesh" ;

 let emp3=new Employee()
 emp2.print();

 