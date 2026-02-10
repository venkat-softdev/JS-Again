// if else statement in javascript 
//syntax:
//if(condition){
//.........
//}else{
    //......
    //}

    //Ex:1
    let age=20;
    if (age>=18) {
        console.log("you are an adult.");
        
    }

    //Ex:2
     age=15;
     if (age>=18) {
        console.log("you are an adult");
        
     }
     else{
        console.log("you are in Minor");
        
     }
     //Ex:3
     age=15;
     let isAdult=(age>=18)?"yes":"no";
     console.log(isAdult);
     
     //Ex:4
      age=25;
      let hasID=true;

      if (age>=18) {
        if (hasID) {
            console.log("Entry allowed");
            
        } else {
            console.log("Please show ID");
            
        }
      } else {
        console.log("you are too young");
        
      }

      