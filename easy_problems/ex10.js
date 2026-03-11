//ex:10 in javascript 

// count vowels in javascript

function countVowels(str){
  let count = 0;
  let vowels = "aeiou";

  for(let char of str.toLowerCase()){
    if(vowels.includes(char)){
      count++;
    }
  }

  return count;
}

console.log(countVowels("aeiow"));

//ex:2
function count(value) {
    
    let count=0;
    let vowels='aeiou'
    for (const char2 of value) {
        if (vowels.includes(char2)) {
            count++
        }
    }
    return count
}
console.log(count('venkat'));

