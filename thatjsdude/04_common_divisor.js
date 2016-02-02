// thatjsdude
// 4. Greatest Common Divisor
// Question: How would you find the greatest common divisor of two numbers?

// two numbers
// find out which is the smaller of the two
// larger number could be divisible by smaller and that is the answer
// if not, you can check by half the smaller number...


// 15, 25
// highest is 5
// 2,3,5,7 are prime

function divisor(num1, num2){
  var small = getSmall(num1, num2);
  //var primes = [2,3,5,7];
  
  for (var i = small; i > 0; i--){
    if ( num1 % i === 0 && num2 % i === 0){
      return i;
    }
    
    // else, check if divisible by primes starting with highest number
    // don't need this
    /*for (var j = primes.length; j > 0; j--){
      if ( num1 % primes[j - 1] === 0 && num2 % primes[j - 1] === 0 ){
        return i;
      }
    }*/
    
  }
  
  return 1;
}

function getSmall(num1, num2){
  if(num1 > num2){
    return num2;
  }
  
  return num1;
}
