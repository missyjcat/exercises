/*
http://www.careercup.com/question?id=5630797185810432
given an integer array , find all combinations which sum to a given number. If a number is used once, it must not be used again. 
eg if input array is 6444 and sum =10 
output must be just 6 4 
Give an O(n) solution

input: array
output: 2D array (array of pairs)

iterate over array
arr[i] + (sum - arr[i]) = sum

what happens after?
arr.splice(i, 1)

assuming numbers are 1-9

maybe iterate over array to create a new array that only contains singles
then do the addition
then splice
*/

function getCombos(arr, sum) {
  var cleanArr = cleanArray(arr);
  var pairs = [];
  
  for (var i = 0; i < cleanArr.length; i++) {
    var diff = sum - cleanArr[i];
    var diffIndex = cleanArr.indexOf(diff);
    
    // if we find diff in cleanArr
    // push to pairs[]
    // splice diff
    if (diffIndex > -1 && diffIndex !== i) {
      pairs.push([cleanArr[i], diff]);
      
      cleanArr.splice(diffIndex, 1);
    }
    
  }

  return pairs;
}

function cleanArray(arr) {
  var cleanArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    // if current value is not in newArr
    if (cleanArr.indexOf(arr[i]) === -1) {
      cleanArr.push(arr[i]);
    }  
  }
  
  return cleanArr;
}

console.log(getCombos([6,4,4,4,5,3,7,7,8,8,8,2], 10));
