 // fibonacci = 0, 1, 1, 2, 3, 5, 8, 13, etc

// function fibonnaci(n) will do all the math
// push the sum to an array
// after n iterations, return the array

// what do we know?
// need to start with 0 & 1
// need to keep track of the sum & previous number

function fibonacci(n) {
    var fArray = [];
    var sum = 0;

    for (var i = 0; i < n; i++){
        // sum = 0 + 0
        // sum = 0 + 1
        // sum = 1 + 2
        // we shouldn't add by the iterator, it's just keeping track of the 'turn' we're on
        // 0 & 1 are fine but when we are at 2, we don't want 2
        // WONT WORK: sum = sum + i;
      
        // c = a + b
        // we want c + b
        // 0 = 0 + null/undefined?
        // WONT WORK: sum = sum + fArray[i];

        /* wont work
        if (i > 1) {
          sum = sum + fArray[i - 1];
        } else {
          sum = sum + i;
        }
        
        // 0: 0 + 0 = 0
        // 1: 0 + 1 = 1
        // 2: 1 + (fArray[1]) = 2
        // [0,1,2]
        // 3: 2 + (fArray[2])
        */
      
        if (i < 2) {
          sum = i;
        } else {
          // we need C = A + B!!!!
          sum = fArray[i - 2] + fArray[i - 1];
        }

        fArray.push(sum);
    }

    return fArray;
}
