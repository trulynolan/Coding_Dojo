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



// # Finding An Average on the Down Low

// ### Three Employees want to know the average of their salaries. They are not allowed to share their individual salaries.
// * They cannot directly share their own salaries in anyway, which includes writing things down. 


// =================================

// # Card Flip Shuffle #

// ## You are in a dark room with a deck of cards. A certain number of the cards are face up and the rest are face down. You can't see the cards. How do you divide the deck in to two piles with equal numbers of face up cards in each? ##

// * You know how many cards are flipped, but you cannot see the deck of cards no matter what and the deck is shuffled, so the flipped cards could be anywhere in the deck.


// =================================

// Word/Logic Problems!

// Vampires and the sleeping man

// Consider a village with vampires and a sleeping man (who never wakes up, no matter what).
// A vampire can eat the sleeping man, but after eating him, the vampire falls asleep.
// Similarly, any vampire can eat any other sleeping vampire, and this process repeats.
// Assume that the vampires are very smart and would ALWAYS choose to stay alive than to eat the man and risk their lives.
// Initially, there are 65 vampires and 1 sleeping man. What would happen in the village?


// =================================

// Bonus riddle:

// John gave his brother James a box:
// About it there were many locks.
// James woke and said it gave him pain;
// So gave it back to John again.
// The box was not with lid supplied
// Yet caused two lids to open wide:
// And all these locks had never a key
// What kind of box, then, could it be?