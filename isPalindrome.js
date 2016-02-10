// palindrome = same forwards as it is backwards
// input: string
// output is true/false

// assuming that word contains no spaces or special characters, and is all lowercase

// compare str[i] with string[len - i]

function isPalindrome(str){
  var len = str.length;
  
  // only need to check half the string
  for ( var i = 0; i < len/2; i++ ) {
    // str[0] str[5-0-1]
    // str[1] str[5-1-1]
    // str[2] str[5-2-1]
    if (str[i] !== str[(len - i) - 1]) {
      return false;
    }
    
    return true;
  }
  
}

console.log(isPalindrome('helloworld')); // false
console.log(isPalindrome('racecar')); // true
