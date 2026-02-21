// continue statement in javascript 

for (let i = 0; i < 10; i++) {
   
 
    if (i==4) {
        continue;
    }
    
    console.log(i);
    
}
console.log('next');

// Ex:2
for (let i = 0; i <=10; i++) {
 
    if (i%2==0) {
        continue;
    }
    console.log(i);
    
    
}
console.log('next');

//Ex:3
for (let i = 0; i <=10; i++) {
    
    if (i===3) {
        continue;
    }
    console.log(i);
    
}
console.log('next next');

//Ex:4
let i=0;
while (i<5) {
    i++;
    if (i===3) {
        continue;
    }
    console.log(i);
    
}

// ex:5
