// javascript async and await

async function welcome(params) {
    return'hello'
}
console.log(welcome());

welcome().then((msg)=>{
    console.log(msg);
    
})
.catch((err)=>{
    console.log(err);
    
})

//ex:2

async function getdata() {
    
    let blogpost=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('blog post')
            
        }, 2000);
    })

    let blogcomment=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('comments for the blog')
        }, 3000);
    })
    console.log('fetching post....');
    let post=await blogpost;
    console.log('post :',post);
    console.log('fetching comments');
    let comment=await blogcomment;
    console.log('comment :',comment);
    return [post,comment];
    
    
    
    
}
console.log('welcome to blog post');
let output=getdata()
console.log(output);


//ex:3



function getnumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 1000);
    })

}

async function run() {
    let data=await getnumber()
     let adding=data+5;
     console.log(adding);
     
     console.log(adding*2);
     
}
run()