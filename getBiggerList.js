/*
2. write a function that takes two array of integers

function getBiggerList(list1, list2) {
  ...
}

that returns an array that returns the larger number from each index.  for example

list 1:    8   11    14     5    2
list 2:    5   10    28     5    7

would return:  8, 11, 28, 5, 7

if one list has more values in it, return those values.  for example

list 1:    8   11    14     5    2
list 2:    5   10    28     5    7     0     11     22

would return:  8, 11, 28, 5, 7, 0, 11, 22
*/

// single for loop that compares the value of each array at each key
// push the `winner` to new array
// if the key is undefined for one array, 
//   the `winner` is the other array
// if the key is undefined for one array,
//   there are no more values in the other array

var list1 = [3, 10, 8, 20, 2];
var list2 = [4, 8, 8, 22, 1, 5, 10, 15];

function getBiggerList(list1, list2) {
  var bigger = [];
  var len1 = list1.length;
  var len2 = list2.length
  
  // lengths
  var short = Math.min(len1, len2);
  
  for (var i = 0; i < short; i++){
    // check if NaN first?
    /*
    if (isNaN(list1[i])){
      bigger.push(list2[i]);  
    }
    
    if (isNaN(list2[i])){
      bigger.push(list1[i]);  
    }
    */
    
    // split long array at the index where the shorter array ends
    // then concat to bigger
    
    // will push all bigger values as long as there
    // is a value at the index in both lists
    bigger.push(Math.max(list1[i], list2[i]));  
  }
  
  // now we take the longer list
  var longList = returnLongList(list1, list2);
  
  // chop off the end
  var tail = longList.slice(short);

  // merge with bigger list
  bigger = bigger.concat(tail);
  
  return bigger;
}

// returns the longer of the two arrays
function returnLongList(list1, list2){
  if (list1.length > list2.length){
    return list1;
  }
  
  return list2;
}
