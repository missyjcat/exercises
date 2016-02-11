/*
From Kris Chan

Given a sentence, reverse the words in the sentence. (i.e. "Hello big wide world.")

input str
output string with words in reverse, not reverse string

build array by splitting the string by ' '
build a new string by concatenation
- starting from the end and moving backwards
- we could reverse the array, but one less step?

'Try CoderPad free for seven days'
how do we eliminate space on first item

return new string
*/

function reverseString(str) {
  var arr = str.split(' ');
  var newStr = '';
  
  // 5 words in str
  // str[4]
  // str[0]
  for (var i = (arr.length - 1); i >= 0; i--){
    newStr = newStr + arr[i] + ' ';
  }
  
  return newStr;
}

console.log(reverseString('Try CoderPad free for seven days'));
