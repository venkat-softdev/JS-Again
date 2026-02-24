// indexof in javavsscript 

 let firstname="venkat";

 let result=firstname.indexOf('a');
 console.log(result);
 

 //ex:2
 let text="Hello World";
 let position=text.indexOf('World');
 console.log(position);
 
 //ex:3

 text='hello world';
 position=text.indexOf('javavascript');
 console.log(position);
 
 //ex:4
 const greeting='Hello World';
 const position1=greeting.indexOf('World');
 console.log(position1);
 
 const position2=greeting.indexOf('World');
 console.log(position2);
 
 
 //ex:4
 const email="example@gmail.com";
 if (email.indexOf('@')!=-1) {
    console.log('valid email format');
    
 } else {
    console.log('Invalid email format');
    
 }
 //ex:5

 const fruits=['apple','banana','mango','orange'];
 const index=fruits.indexOf('mango');
 console.log(index);
 
 //ex:6
 const scores=[10,20,30,40,50];
 console.log(scores.indexOf(30));;
 console.log(scores.indexOf(99));
 
 