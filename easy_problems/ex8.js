// ex:8 in javascript 

// revesre a string 

//ex:1
let fname=['venkat','arish','yuvba'];
console.log(fname.reverse());


//ex:2
let fruits=['apple','orange','banana','jackfruit'];
let reversevalue=fruits.reverse();
console.log(reversevalue);

//ex:3
function reversestring(value) {
    return value.split("").reverse().join("");
}
console.log(reversestring('yuvaraj'));

//ex:4
function reverse(name) {
    
    return name.split("").reverse().join("");
}
console.log(reverse('venkat'));
