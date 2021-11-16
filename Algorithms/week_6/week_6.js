// What is Recursion?
// Basically: when a function calls itself within itself


// Write a recursive function that, given a number, returns the sum of integers from one up to that given number
// Ex: given 5 would return 1+2+3+4+5 == 15
// Ex: given 2.5 would return 1+2 == 3

function sigma(num) {
    var sum = 0
    for (i = 0 ; i <= num ; i ++) {
        sum += i
    }
    return sum
}

function recursiveSigma(num) {
    if (num <= 1) {
        return 1
    }
    
    return num + recursiveSigma(num - 1)
}

recursiveSigma(5)


// Write a drecursive function that, given a number, returns the product of integers up to a given number
// Ex: given 4 would return 1*2*3*4 == 24
// Ex: given 3.5 would return 1*2*3 == 6 

function recursiveFactorial(num) {
    if (num <= 1) {
        return 1
    }
    return num * recursiveFactorial(num - 1)
}
recursiveFactorial(4)

// Given a number, add the collective sum up to that number (using Fibonacci sequence)

// F0    F1    F2    F3    F4    F5    F6    F7    F8    F9    F10    
// 0    1    1    2    3    5    8    13    21    34    55    

function recursiveFibonacci(num) {
    if(num < 1){
        return 1
    }
    return num + recursiveFibonacci(num - (num-1))
}
recursiveFibonacci(13) 

// Day 2

function recursiveGreatestCommonFactor(num1,num2){
    if (num1 == num2) {
      return num1;
    }
  
    if (num1 > num2) {
      return recursiveGreatestCommonFactor ((num1-num2), num2)
    }
    if (num2 > num1) {
      return recursiveGreatestCommonFactor (num1, (num2-num1))
    }
  }
  
  console.log(recursiveGreatestCommonFactor(50,180)); // 10
  console.log(recursiveGreatestCommonFactor(7,35)); // 7
  console.log(recursiveGreatestCommonFactor(65,95)); // 5
  console.log(recursiveGreatestCommonFactor(123456,987654)); // 6
  console.log(recursiveGreatestCommonFactor(102,2000)); // 2
  console.log(recursiveGreatestCommonFactor(7,13)); // 1