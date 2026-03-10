// ex:7 in javavscript 

// find a factorial

function factorial(n) {
    
    let result=1;

    for (let i = 1; i < n; i++) {
        result=result*i;
        
    }
    return result
}
console.log(factorial(5));

//ex:2
function fun(j) {
    
    let result=1
    for (let i = 1; i < j; i++) {
       result=result*i
        
    }
    return result
}
console.log(fun(7));
