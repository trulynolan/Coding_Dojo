var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
// New keyword alert!! If starts a conditional statement.
// Followed by a set of parentheses
// In the parenthesis, place a boolean expression
// After closing parenthesis, place a boolean expression
// After closing parenthesis, curly braces at the bookends of the code block

if (isSunny) {
    // whattobring = whattobring + "sunglasses, ";"
    whatToBring += "sunglasses, ";
}
console.log(whatToBring);
// -> I should bring: sunglasses

if (temperature < 50) {
    whatToBring += "a coat, ";
    //   -> "I should bring: sunglasses, a coat, " 
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}
// boolean; do not run if false

whatToBring += "and a smile!";
// Should run as "I should bring: sunglasses, a coat, and a smile!"

console.log(whatToBring);

// Prepare for downcount
// Else means otherwise


for (var i = 10; i > 0; i--) {
    if (i != 2) {
        console.log(i);
        //   otherwise
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!");

//   Count positives

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        countPositives++;
    }
}
console.log("there are " + countPositives + " positive values");




// Week 1 Day 4

var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
setX(15);
console.log(x);

5, 15


var x = 5;
    
function addToX(amount) {
    return x + amount;
    // The moment you reach "return," nothing else in the line matters. Break the function! There is a value returned no matter what. 
    console.log("hello there");
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);

// 5, -5, 5


function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
// for (var left=0; left<5/2 left++)
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);





