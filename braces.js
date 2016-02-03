// write a function that takes a string and returns true if the braces are balanced
// {}, [], ()
// '{{}}' true
// '{[]}()' true
// 'public static void foo(int x) { for (i = 0; i < x; i++) { something }}' true
// '{{' false
// '}}' false
// '((})' false
// '{[}]' false

// output is return true/false
// input string

// we should keep track of opening and closing braces,
// and make sure that the open/close in order

// dictionary of the different braces.. how should we store this?

// arr = ['{','}', '[',']', '(',')']
// arr = [{},{},{}]

var pairs = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

function isBalanced(str){
 
  // take the string
  // break it into an array
  var arr = str.split();  
  
  var braces = [];
  
  var pop = '';
  
  // iterate through array and if an opening is found, then look for the closing
  // pairs[i].key pairs[i].val
  
  for ( var i = 0; i < arr.length; i++ ){
    // opening: push to braces
    if (arr[i] in pairs || arr[i]) {
      // push to new array
      braces.push(arr[i]);
      // we don't need to check anything else
      continue;
    }
    
    // closing: pop and compare
    // if current iteration is a value of a key in pairs
    if (arr[i] === pairs[arr[i]]) {
      // pop last element
      var pop = braces.pop();
      
      // compare pop with last item in array
      // is current iteration the value for the pop key
      if (pairs[pop] !== arr[i]){
        return false;
      }
    }
    
    // we've made it all the way through, hooray
    return true;
    
  }
  
}
