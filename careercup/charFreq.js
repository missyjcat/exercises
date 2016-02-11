/*
http://www.careercup.com/question?id=5692804064870400
given a string, calculate the frequency of characters, output the array with the letter and frequency. (such as: for “abbcdc”, the output should be (a,1),(b,2),(c,2),(d,1))

input: string
output: array
output better if hashtable, not array
why? because i would have to create a 2D array to find the letter
hashtable: letters are the keys, easier to search
arr.push(str)

clean up string
toLowerCase
remove spaces
assume there is no punctuation

'Welcome to the wonderful world of engineering'

*/

function charFreq(str) {
  
  // clean up string
  var cleanStr = cleanUpString(str);
  var frequency = {};
  
  for (var i = 0; i < cleanStr.length; i++) {
    var letter = cleanStr[i];
    
    // if it already exists
    if (frequency.hasOwnProperty(letter)) {
      frequency[letter] = frequency[letter] + 1;
    }
    else {
      frequency[letter] = 1;
    }
    
    // if the letter is not already in frequency
    // push the letter with quantity of 1
    
    // if its already there
    // increase qty by 1
  }
  
  return frequency;
}

function cleanUpString(str) {
  // lower case
  // remove spaces
  return str.toLowerCase().replace(/ /g, '');
}

console.log(charFreq('Welcome to the wonderful world of engineering'));
