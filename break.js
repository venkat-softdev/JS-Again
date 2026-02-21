// Break statement in javascript 

for (let i = 0; i <10; i++) {

    console.log(i);
    
    if (i==4) {
        break;
    }
    
}

//Ex:2
for (let i = 0; i < 10; i++) {
    
    if (i==4) {
        break;
    }
    console.log("the Number is "+i);
    
}
// ex:3

let i=0;
while (i<5) {
    if (i===3) {
        break
    }
    console.log(i);
    i++
}

//Ex:4
let fruits='appl';
switch (fruits) {
    case 'orange':
        console.log('hey its orange');
        
        break;
      
        case 'mango':
            console.log('hey its mango');
            break;
            
            case 'apple':
                console.log('hey its apple');
                break;

                

    default:
        console.log('its another fruit');
        
        break;
}

//Ex:5
outerloop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        
        if (i===1 && j==1) {
            break outerloop;
        }
    
        console.log(`i:${i},j:${j}`);
        
    }

    
}