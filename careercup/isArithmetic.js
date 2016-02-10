// http://careercup.com/question?id=5724684365594624
// check if an integer array is arithmetic sequence
// 1,2,3,4,5,6,7,8 => true
// 1,3,5,7,9 => false
// array may not be sorted

function isArithmetic(arr) {
  
  // Notes:
  // in a for loop, we can check every single iteration
  // array[i] === i
  // - what if there are 100 items in array?
  // - what if we are given 5,6,7,8,9? => true
  // - what about 7,5,6,8,9 => false
  
  // dont like
  // maybe we could multiply all values of the array
  // - this still means we to iterate over each index
  // start with the first value and divide, increment divider
  
  // what we know:
  // array length
  // always difference of 1
  
  // assumptions
  // array has a length of 3 or more
  
  // iterative solution
  // starting at 1 so we can check the value behind it to start
  for (var i = 1; i < arr.length; i++){
    /*
    var diff = arr[i + 1] - arr[i];
    if ( diff !== 1 ) {
      console.log(arr[i]);
      return false;
    }
    */
    var diff = arr[i] - arr[i - 1];
    if (diff !== 1){
      return false;
    }
    
  }
  
  return true;
}
var numbers = [5,6,7,8,9]; // true
var numbers2 = [3,6,7,8,9]; // false

console.log(isArithmetic(numbers));
console.log(isArithmetic(numbers2));
