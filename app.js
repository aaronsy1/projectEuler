//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

//case scenario find largest prime factor of 600851475143

//first we need to create an array of prime factors 

//define a prime number as a number greater than 1 whose only factors are itself and 1


var isPrime = (n) => {

    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

var isFactor = (m) => {
    for (j = 2; j < m; j++) {
        if (m % j === 0) {
            return true;
        }
    }
}

var primeFactor = (o) => {
    var primeFactorArray = [];
    for (k=2; k<o; k++){
        if(isFactor(o) && isPrime(k)){
            primeFactorArray.push(k);
            console.log(primeFactorArray[primeFactorArray.length-1]);
        }
    }
    
}

primeFactor(13195);