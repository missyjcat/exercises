// write a function that prints a times table from 1 to 12

// 1 2 3 4 5 6 7 8 9 10 11 12
// 2 4 6 8 10 yadda
// 3 6 9 12 yadda

function timesTable(){
  // output
  var out = [];
  
  for (var i = 1; i <= 12; i++) {
    // cycle through first row  
    var row = [];
    
    for (var j = 1; j <= 12; j++){
      // multiply row i times 1-12
      row.push(i * j);
    }
    
    // push row i to output
    out.push(row);
  }
  
  return out;
}
