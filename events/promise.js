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

//ex:5
let checknumber=new Promise((resolve, reject) => {
    let num=10

    if (num>5) {
        resolve('num greater than 5')
    } else {
        reject('num less than 5')
    }
})
checknumber.then((msg)=>{
    console.log(msg);
    
})
.catch((error)=>{
    console.log(error);
    
})

//ex:6
let num=0

let checking=new Promise((resolve, reject) => {
    if (num%2==0) {
        resolve('even number')
    } else {
        reject('odd number')
    }
})

checking.then((msg)=>{
    console.log(msg);
    
})
.catch((error)=>{
    console.log(error);
    
})

//ex:7

let login=new Promise((resolve, reject) => {
    let password='12345'

    if (password==='12345') {
        resolve('login success')
    } else {
        reject('wrong password try again')
    }
})

login.then((msg)=>{
    console.log(msg);
    
})
.catch((err)=>{
    console.log(err);
    
})

//ex:8
let orderfood=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('food delivered')
    }, 3000);
})

orderfood.then((msg)=>{
    console.log(msg);
    
})
//ex:9

let work=new Promise((resolve, reject) => {
    resolve(10)
})

work.then((num)=>{
    console.log(num);
    return num*2
    
})
.then((num)=>{
    console.log(num);
    return num+5
    
})
.then((num)=>{
    console.log(num);
    return num/2
    
})

//ex:10

let randomvalue=new Promise((resolve, reject) => {
    let random=Math.random();

    if (random > 0.5) {
        resolve('success')
    } else {
        reject('failed')
    }
})

randomvalue.then((msg)=>{
    console.log(msg);
    
})
.catch((err)=>{
    console.log(err);
    
})

//ex:11

let agecheck=new Promise((resolve, reject) => {
    let age=17

    if (age>18) {
        resolve('eleigible to vote')
    } else {
        reject('not eligible to vote')
    }
})
agecheck.then((msg)=>{
    console.log(msg);
    
})
.catch((err)=>{
    console.log(err);
    
})


// promise .all


Promise.any([Promise.resolve('good'),Promise.reject('bad'),Promise.resolve('good')])
.then((msg)=>{
    console.log(msg);
    
})
.catch((err)=>{
    console.log(err);
    
})

