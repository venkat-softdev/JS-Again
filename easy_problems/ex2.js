// print even numbers in javacsript

for (let i = 0; i < 10; i++) {
    if (i%2==0) {
        console.log(i);
        
    }
    
}

//ex:2
for (let i = 0; i <20; i++) {
    
    if (i%2==0) {
        console.log(`hey its evennumber = ${i}` );
        
    }
    else if (i%3==0) {
        console.log(`hey it's oddnumber = ${i}`);
        
    }
    
}

//ex:3

let numbers=[1,2,3,4,5,6,7,8,9,10];
let evennumbers=[];

numbers.forEach((num)=>{
   if (num%2==0) {
     evennumbers.push(num)
   }
})
console.log('evenNumbers :',evennumbers);


