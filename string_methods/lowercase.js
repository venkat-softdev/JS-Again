// lowercase in javavscript string methods 

//ex:1
let mixedcasestring='HELLO WORLD';
let lowerstring=mixedcasestring.toLowerCase();
console.log(lowerstring);

//ex:2
const data='USER_123! @HOME';
console.log(data.toLowerCase());

//ex:3
const input='Admin';
if (input.toLowerCase()==='admin') {
    console.log('Access Graunted');
    
}
else{
    console.log('not Access');
    
}

//Ex;4
const tags=['javascript','HTML','CSS'];
const lowertags=tags.map((tag)=>{
    return tag.toLowerCase()
})
console.log(lowertags);
 