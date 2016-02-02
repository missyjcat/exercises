// thatjsdude
// 3. Fibonacci
// Question: How do get nth Fibonacci number?

// fibonacci is 0,1,1,2,3,5,8,13
// 0, 1 must be given or we have nothing to start with

// output = the nth number in the fibonacci series
// input = a number

function getFibo(number){
  var fibo = [0,1];
  
  for (var i = 0; i < number + 2; i++){
      if (i == 0 || i == 1){
        continue;
      }
      // first will be fibo[2] = fibo[0] + fibo[1] = 0 + 1
      fibo.push(fibo[i - 2] + fibo[i - 1]);
  }
  
  return fibo[number + 2];
}

// do we count 1 twice in fibo sequence?
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
