// block scope and function scope in javavscript 

//ex:1
if (true) {
    console.log('Hi venkat');
    
}

//ex:2
if (true) {
    let blockscope='im a block scope variable'
    console.log(blockscope);
    
}



//ex:3
if (true) {
    var globalscope='Hi im globbal scope'
    console.log(globalscope);
    
}


//function scope

function myfun() {
    let funscope='im function scope'
    console.log(funscope);
    
}
myfun()

//ex:2
function examplefun() {
    const x='declared inside function';
    console.log('inside funtion');
    console.log(x);
    
    
}

{
    const x=1;
    console.log(x);
    
}

