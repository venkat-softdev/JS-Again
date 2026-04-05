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
