// isAnagram, from Vafa & Jess
// given two strings, return true if they are anagrams (eg, 'cat' and 'dog' should return false, but 'cat' and 'tac' should return true)

// Notes:
// assuming it doesn't matter that the anagram is an actual word
  // e.g. cat & tca
// compare lengths for initial check
// check letters from a one by one
// dont need to break strings into array

// Other questions:
// should we care about spaces?
// should we care about punctuation?
// should we care about casing?

// input: two strings
// output: true/fase

// this is a simple solution that does not take into account
// spaces, punctuation, or casing
// if casing: toLowerCase each string
// if punctuation: make dictionary and skip these items
// if spaces: skip these items
function isAnagram(a,b){
  var aLen = a.length,
      bLen = b.length,
      bArray = b.split('');
  
  // false immediately if strings aren't same length
  if (aLen !== bLen){
    return false;
  }
  
  // note: need to keep track of occurences of the same letter
  
  // check each letter
  for (var i = 0; i < aLen; i++){
    var bIndex = b.indexOf(a[i]);
    // if match remove a from b and 
    if (a[i] === b[bIndex]){
      bArray.splice(bIndex,1);
      continue;
    } else {
      return false;
    }
  }
  
  return true;
}
