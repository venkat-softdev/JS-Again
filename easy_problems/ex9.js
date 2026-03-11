// ex:9 in javascript 

// check palindrome string 

function palindrome(str) {
    let rev=str.split("").reverse().join("");
    return str===rev
}
console.log(palindrome("madam"));

//ex:2
function value(str2) {
    let result=str2.split("").reverse().join("");
    return result===str2
}
console.log(value('sos'));

