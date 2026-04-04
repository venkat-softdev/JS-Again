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


//ex:2
let mypromise=new Promise((resolve, reject) => {
    let sucees='true'
    
    if (sucees=='true') {
        resolve('well done')
    }
    else{
        reject('try again')
    }
})

mypromise.then((good)=>{
    console.log(good);
    
})
.catch((error)=>{
    console.log(error);
    
})

//ex:3
let ispass='true'

let exam=new Promise((resolve, reject) => {
    if (ispass) {
        resolve('pass')
    }
    else{
        reject('fail')
    }
})

exam.then((msg)=>{
    console.log(msg);
    
})
.catch((error)=>{
    console.log(error);
    
})

//ex:4

let download=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('download successfully')
    }, 2000);
})

download.then((msg)=>{
    console.log(msg);
    
})