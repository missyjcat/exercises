// http://www.thatjsdude.com/ 
// 1. check Prime

// a prime number is only divisible by itself and 1
// we don't need to check 1 because everything is divisible by 1
// so, if divisible by itself, there should be 0 remainder
// modulo returns remainder

function checkPrime(number) {
  
  for (var i = 2; i < number; i++){
    if (number % i === 0) {
      return false
    }
  }
  
  return true;
}
