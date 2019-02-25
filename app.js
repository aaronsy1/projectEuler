//Question 1
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

//helper
var isDivisible = (num, denominator) => num % denominator == 0;

//answer
var problemOne = function () {
    var sol = 0;
    for (i = 0; i < 1000; i++) {
        if (isDivisible(i, 3) || isDivisible(i, 5)) {
            sol += i;
        }
    }
    console.log(sol);
}

// run function 
problemOne();
