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
    if (str[x] == '(') {
      openParens.push(str[x]);
    }
    if (str[x] == ')') {
      closeParens.push(str[x]);
    }
  }
  if (openParens.length == closeParens.length) {
    return true;
  }
  console.log(openParens)
  console.log(closeParens)
  return false;
}
console.log(parensValid("y(3(p)p(3)r)s"))
// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true

// hint: consider using an array or object to solve

function bracesValid(str) {
  // your code here
}

// Day 3


// A Palindrome is a word, phrase, or sequence that reads the same backward as forward
// Examples: madam, civic, radar, level, rotor, kayak, refer, racecar, tacocat, etc.
// Use the isPalindrome function below to receive a string and return true if it's a Palindrome
// and false if it is not. Do not ignore whitespaces, casing matters!!

// Example 1: "racecar" returns true
// Example 2: "e tacocat e" returns true
// Example 3: "abba" returns true 
// Example 4: "Dud" returns false
// Example 5: "oho!" returns false
// Example 6: " to " returns false

// HINTS: You can loop through a string
// Figure out a way to compare one side of the string with it's opposite pair
// If those elements don't match then it's not a Palindrome
// If we make it through our loop and never hit false, then it should be a Palindrome

function isPalindrome(str) {
  var newstring = ""
  for (var i = str.length - 1; i > -1; i--) {
    newstring += str[i]
  }
  if (newstring == str) {
    return true
  }
  else {
    return false
  }
}



console.log(isPalindrome("racecar"));
console.log(isPalindrome("e tacocat e"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("Dud"));
console.log(isPalindrome("oho!"));
console.log(isPalindrome(" to "));



// Use the longestPalindrome function below to receive a string and return the 
// longest palindrome it can find in the whole string.  Include spaces as well!
// If the palindromes have the same length, keep the one most recently found

// Example 1: "my favorite racecar erupted" returns "e racecar e"
// Example 2: "nada" returns "ada"
// Example 3: "nothing to see" returns "ee"
// Example 4: "hello dada" returns "dad"
// Example 5: "not much" returns "n"

// HINTS: 
// --Think of how you could have a way to take one letter in the string and compare it with the rest 
//   of the string.  Then take the next letter and keep comparing.  Loops maybe? **nudge nudge**
// --Think of a way to combine longestPalindrome with isPalindrome.  You already have the functionality
//   of checking if something is a Palindrome so see if you can use it!

// The slice() method could be useful here, but if you find another way, great!

// FYI: slice() can select a range of characters in a string starting at a given index position and ending 
//      with, but not including, the other given index. 
// For example "hello".slice(1,4) would return "ell".  
// It starts at index position 1 which is "e" and ends, but doesn't includes, index position 4 which is "l"

function longestPalindrome(str) {
  for (var i = 0; i < str.length; i++)
    new_str = str.split("");
  return new_str
}

console.log(longestPalindrome("my favorite racecar erupted"));
console.log(longestPalindrome("nada"));
console.log(longestPalindrome("nothing to see"));
console.log(longestPalindrome("hello dada"));
console.log(longestPalindrome("not much"));


// Day four

// Use the bookIndex function below to receive a sorted array of page numbers
// and then return a STRING that combines consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12,14,15,16,17] returns "1, 3-5, 7-8, 10, 12, 14-17"

// HINTS: 
// You'll want a way to look at the current value and then look at the next one to see if it's one higher
// If it is, then you've found a range, if it's not, you haven't
// You could create a string and add to it, or get rid of the values in the array that aren't needed 
//   and convert to a string, or whatever way you come up with!
var arr = [1, 3, 4, 5, 7, 8, 10, 12, 14, 15, 16, 17]
function bookIndex(arr) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] + 1 == arr[i + 1]) {
      var start = arr[i];
      while (arr[i] + 1 == arr[i + 1]) {
        i++;
      }
      var end = arr[i];
      temp.push(start + "-" + end);
    } else {
      temp.push(arr[i]);
    }
  }
  var newstring = temp.join(',');
  return newstring
}

console.log(bookIndex(arr));

console.log(bookIndex([1, 3, 4, 5, 7, 8, 10, 12, 14, 15, 16, 17]))

// 
// i=3 [1,3,4,5,7,8,10,12,14,15,16,17] length = 12
function bookIndex(arr){ 
var str = "";
if (arr[i + 1] === arr[i] + 1) {
  var start = arr[i];
  while (arr[i + 1] === arr[i] + 1) {
    i++;
  }
  var end = arr[i];
  str += start + "-" + end;
}
else {
  str += arr[i];
}
if (i !== arr.length - 1) {
  str += ", ";
}
}
return str;