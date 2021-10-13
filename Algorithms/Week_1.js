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








