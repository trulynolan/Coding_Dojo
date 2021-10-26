// Python week 1 day 1


// Implement reverseString(str) that takes in a String, and then returns a string of the same length, but with the characters reversed.
//  01234567
// Example: "creature" ---> "erutaerc"

// str[3]

// assume it's a  single word

// ** Don't use the built-in reverse() method!

function reverseString(str) {
    // your code here
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

console.log(reverseString("creature"));

// Create a function that, given a string, returns the string's acronym (first letter's only, capitalized).
//  0123456789
// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""

// function acronym(str) {
//     var space = false;
//     var newStr = "";
//     for (var i = 0 i<str.length; i++) {
//         if space == true
//         if (str[i] == ' ') {
//                 space = true
//             }
//     }

//     console.log(acronym("there's no free lunch - gotta pay yer way"));


    // Day two 


    // Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.

    // Example 1:"y(3(p)p(3)r)s" --> true
    // Example 2: "n(0(p)3" --> false
    // Example 3: "n)0(t(o)k" --> false

    // hint: consider using an array or object to solve

    // check entire string, return true/false
    // every single opening parens has a closing
    // never hit an closing parens before a opening parens
    // ONLY care about the parens in the string
   
    function parensValid(str) {
        var openParens = [];
        var closeParens = [];
          for (var x = 0; x < str.length; x++) {
          if (str[x] == '(' ) {
            openParens.push (str[x]);
            }
          if (str[x] == ')' ) {
            closeParens.push (str[x]);
            }
          }
          if (openParens.length == closeParens.length) {
            return true;
          }
          console.log (openParens)
          console.log (closeParens)
          return false;
    }
    console.log (parensValid ("y(3(p)p(3)r)s"))
// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true

// hint: consider using an array or object to solve

function bracesValid(str) {
    // your code here
}