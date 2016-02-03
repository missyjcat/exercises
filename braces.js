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
  var arr = str.split('');  
  var braces = [];  
  
  for ( var i = 0; i < arr.length; i++ ){
    // if opening: push to braces
    if (arr[i] in pairs) {
      // push to new array
      braces.push(arr[i]);
      // we don't need to check anything else
      continue;
    }
    
    // check if closing
    for (var j in pairs){
    	if (pairs[j] === arr[i]){
        // value is closing: pop and compare
        // pop last element
        var pop = braces.pop();
        
        // if there's nothing left to pop
        if (!pop) {
        	return false;
        }
	
        // compare pop with last item in array
        // is key `pop` in pairs the the value for the current iteration in arr
        if (pairs[pop] !== arr[i]){
          return false;
        }
      }
    }
  }
  return true;
}

isBalanced('hello(){}');
