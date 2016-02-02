// thatjsdude
// 2. How could you find all prime factors of a number?

// prime factors of a number
// find all factors
// which of these are only divisible by itself
// everything is pretty much divisble by 1

// what is our output
// array of all prime factors [1, x, y, z]

// function that takes a number and returns array of prime factors

function primeFactors(number) {
  var out = [1];
  
  for (var i = 2; i <= number; i++){
    if (number % i == 0){

      // 34 % 17 === 0
      // isPrime(17)
      
      // every number that is divisible will make it here
      // number = 34
      // factors = [1, 2, 17, 34]
      if(isPrime(i)){
        out.push(i); 
      }
    }
  }
  
  
  // given an array of numbers, return only the prime numbers
  
  // start at 2 and check each factors[j] from 2 on
  // if factors[j]%j === 0 && fact
  
  // number = 24
  // 1,2,3,4,6,8,12,24
  
  return out;
}

function isPrime(number){
  for (var i = 2; i < number; i++){
    if (number % i == 0) {
      return false;
    }
  }
  
  return true;
}
