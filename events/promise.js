// javascript promise 

let promise=new Promise((resolve, reject) => {
    let sum=1+1

    if (sum==2) {
        resolve('done')
    }
    else{
        reject('undone')
    }
})

promise.then((msg)=>{
 console.log(msg);
 
}).catch((error)=>{
    console.log(error);
    
})


// example 2

setTimeout(() => {
    console.log('hi');
    
}, 2000);

function settimeoutpromise(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve,duration)
    })
}

settimeoutpromise(2000).then((msg)=>{
    console.log('hello');
    
})
.catch((error)=>{
    console.log(error);
    
})
