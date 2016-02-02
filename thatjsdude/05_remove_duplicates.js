// http://www.thatjsdude.com/ 
// 5. remove Duplicate

// How would you remove duplicate members from an array?

var arr = ['harold', 'sarah', 'brian', 'sarah', 'harold', 'mom', 'dad'];

function removeDupes(arr) {
  // create new clean array and re-initialize old as new array
  var arr2 = [];
  var current;
  
  
  for (var i = 0; i < arr.length; i++){
    if(arr2.indexOf(current) < 0){
      arr2.push(current);
    }
  }
  
  // assuming we want to return the same array
  arr = arr2;
  return arr;
}
