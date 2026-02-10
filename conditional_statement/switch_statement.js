// switch statement in javascript 

let num=3;

switch (num) {
    case 1:
        console.log("one");
        
        break;
         
        case 2:
            console.log("two");
            break;
         
         case 3:
            console.log("Three");
            break;
               
        default:
            console.log("invalid number");
            
        break;
}
//Ex:2
 let fruit="apple";
 let message="";

 switch (fruit) {
    case "banana":
        console.log("hey it's banana");
        
        break;
          
        case"grape":
        console.log("hey it's grape");
        break;

        case "apple":
            console.log("hey it's apple");
            break;
            
        
    default:
        console.log("found another fruit");
        
        break;
 };

 //Ex:3
 let day="Saturday";
 let typeodDay=""

 switch (day) {
    case "monday":
        console.log("It's Monday");
        
        break;

  
        case "Saturday":
        case "sunday":
            typeodDay="It's weekend"
            break;
            
 
    default:
        typeodDay="It's weekday"
        break;
 }
 console.log(typeodDay);
 
 //Ex:4

 function getwheatherMessage(weather) {
    
    switch (weather) {
        case "sunny":
            return "Don't forget sunglasses"
            
            break;

            case"rainy":
            return "Take an Umbrella"
            break;

            case "snowy":
                return "wear warm clothes"
                break;
    
        default:
            return "check the forcast"
            break;
    }
 }
 console.log(getwheatherMessage("rainy"));
 