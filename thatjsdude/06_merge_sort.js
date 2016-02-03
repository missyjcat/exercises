// thatjsdude
// 6. merge two sorted array
// Question: How would you merge two sorted array?

// how would i merge and sort an array?
// question is kinda vague
// output = [a,b,c,d,e,f,g,h,i]
// input = array1, array2

// check the type of value in array to make sure we're dealing with the same content
// so if our input was
// arr1 = [10,4,2,3,9];
// arr2 = [13,7,11,12,];
// result = [2,3,4,7,9,10,11,12,13];

var arr1 = [10,4,2,3,9];
var arr2 = [13,7,11,12,];

function mergeSort(arr1,arr2){
  var out = [];
  
  // so how do we hold our place in the other array
  // had to google this
  // sort will order everything, but unicode will mess everything up
  // .sort([comparefunction])
  
  out = arr1.concat(arr2);
  out.sort(function(a, b) {
    return a - b;
  });
  
  return out;
}
