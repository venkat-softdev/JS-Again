// // javascript async and await

// async function welcome(params) {
//     return'hello'
// }
// console.log(welcome());

// welcome().then((msg)=>{
//     console.log(msg);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })

// //ex:2

// async function getdata() {
    
//     let blogpost=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('blog post')
            
//         }, 2000);
//     })

//     let blogcomment=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('comments for the blog')
//         }, 3000);
//     })
//     console.log('fetching post....');
//     let post=await blogpost;
//     console.log('post :',post);
//     console.log('fetching comments');
//     let comment=await blogcomment;
//     console.log('comment :',comment);
//     return [post,comment];
    
    
    
    
// }
// console.log('welcome to blog post');
// let output=getdata()
// console.log(output);


// //ex:3



// function getnumber() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(10)
//         }, 1000);
//     })

// }

// async function run() {
//     let data=await getnumber()
//      let adding=data+5;
//      console.log(adding);
     
//      console.log(adding*2);
     
// }
// run()


// //ex:2

// function getA(params) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(5)
//         }, 1000);
//     })
// }

// function getB(params) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(10)
//         }, 1000);
//     })
// }

// async function combine(params) {
    
//     let result1= await getA()
//     let result2=await getB()

//     let result3= result1+result2;
//     console.log(result3);
    
// }
// combine()


// //ex:3

// function checknum(num) {
    
//     return new Promise((resolve, reject) => {
//         if (num >0) {
//             resolve('positive')
//         } else {
//             reject('negative')
//         }
//     })
// }

// async function run(params) {
    
//     try {
//         let res= await checknum(5)
        
//         console.log(res);
        
//     } catch (err) {
       
//         console.log(err);
        
//     }

//     try {
        
//         let value=await checknum(-2)
//         console.log(value);
         

//     } catch (err) {
//         console.log(err);
        
//     }

// }

//ex:5

function order() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('food order placed')
        }, 1000);
    })
}

function cook(params) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ('food cooking done')
        }, 1000);
    })
}

function delivered(params) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ('food delivered')
        }, 1000);
    })
}


async function food(params) {
    
    let orderfood=await order()
    console.log(orderfood);

    let cookingfood=await cook()
    console.log(cookingfood);

    let deliveredfood=await delivered()
    console.log(deliveredfood);
    
    
    

}

food()

