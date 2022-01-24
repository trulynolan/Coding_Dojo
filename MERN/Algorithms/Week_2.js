//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my sho"
function rotateString(string, amount) {
    let rword = '';
    for (let index = 0; index < string.length; index++) {
        if (index < amount) {
            rword += string[string.length - amount + index]
        }
        else {
            rword += string[index - amount]
        }
    }
    console.log(rword);
    return rword;
}

rotateString("Did I shine my shoes today?", 9); // returns "es today?Did I shine my sho"

//"es today?Did I shine my sho"
// "Did I shine my shoes today?Did I shine my shoes today?"
function isRotated(string1, string2) {
    if (string1.length == string2.length && (string1 + string1).indexOf(string2) != -1) {
        return true
    }
    return false
}

console.log(isRotated("Did I shine my shoes today?", "es today?Did I shine my sho"));
console.log(isRotated("Did I shine my shoes today?", "shoes today?Did I shine my "));

const rotateString = (str, num) => {
    let start = str.length - num;
    let newStr = "";
    if (str.length < num) {
        return "Number is too large, you fool!";
    } else {
        for (let i = start; i < str.length; i++) {
            newStr += str[i];
        }

        for (let j = 0; j < start; j++) {
            newStr += str[j]
        }

    }

    return newStr;
}

let testString = "012345";
console.log(rotateString(testString, 3));
let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 9));

const isRotation = (str1, str2) => {
    for (let i = str1.length; i > 0; i--) {
        // console.log(rotateString(str1, i));
        if (str2 == rotateString(str1, i)) {
            return true
        }
    }
    return false;
}

console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"));
console.log(isRotation("Did I shine my shoes today? ", "es today?Did I shine my sho"));


// Wednesday

const dedupe = (str) => {
    var newStr = "";
    var newStr2 = "";
    for (let i = str.length - 1; i >= 0; i--) {
        let dupa = false;
        for (var j = 0; j < newStr.length; j++) {
            if (str[i] === newStr[j]) {
                dupa = true;
            }
        }
        if (!dupa) {
            newStr += str[i];
        }
        dupa = false;
    }
    for (let i = newStr.length - 1; i >= 0; i--) {
        newStr2 += newStr[i];
    }
    return newStr2;
}


console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!"));


// 

const parseInt2 = (str) => {
    let num = 0;
    for(let i = 0; i < str.length; ++i)
        num += (str.charCodeAt(i) - 48) * (10 ** (str.length - 1 - i));
    return num;
}

//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
const encode = (str) => {
    let newString = ''
    let tempLetter = str[0]
    let count = 1
    for(var i = 0; i < str.length; i++){
        if(str[i] == str[i+1]){
            tempLetter = str[i]
            count++
        }
        else{
            newString += tempLetter + count
            count = 1
        }
    }
    return newString
}

// console.log(encode("aaabbcccc"));
// console.log(encode("ddddeeeeeffgggg"));
// console.log(encode("aaaaabbbbbbbc"));
// console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
const decode = (str) => {
    
} 


// console.log(decode("a3b2c4"));
// console.log(decode("t2h10j4"));

// console.log(parseInt("432"));
// console.log(parseInt2("432"));


