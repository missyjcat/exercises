// ardendertat
// 1. Array Pair Sum 
//Given an integer array, output all pairs that sum up to a specific value k

// input = [a,b,c,d,e,f,g], k;
// input = [1,2,3,4,5,6,7], 8;
// output = 1,7; 2,6; 3,5; 4;

// iterate through input array
// does input[i] + input[i + x] = k
// if it does
// push i & i+x to new array

// when we look at one index, we should check every other index
// is this efficient

// how do we prevent adding the same pairs

var input = [1,2,3,4,5,6,7,8];

function pairs(array, k){
  var len = array.length,
      pair = [],
      checked = [];
  
  for (var i = 0; i < len; i++){
    
    // if current iteration isn't already in checked []
    if(checked.indexOf(array[i]) === -1){
      for (var j = 0; j < len; j++){
        // same key, skip
        if (i === j){
          continue;
        }

        var arrI = array[i],
            arrJ = array[j];
        
        // does i + i+x = k
        if (arrI + arrJ === k){ 
          pair.push([arrI, arrJ]);
          // keep track of numbers we've pushed already
          checked.push(arrI, arrJ);
          continue;
        }
      }
    }
  }
  
  return pair;
}
