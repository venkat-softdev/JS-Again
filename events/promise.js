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

