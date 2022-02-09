// Length of the Last Word


var lengthOfLastWord = function(s) {
    let startWord = false;
    let count = 0;
    for(let i = s.length-1; i >= 0; i--) {
        if(s[i] !== " ") {
            startWord = true;
        } 
        if(startWord){
            if(s[i] == " "){
                return count;
            } else {
                count++;
            }
        }
    }
    return count;
}

console.log(lengthOfLastWord("Hello World"));


// Find the Difference



 var findTheDifference = function(s, t) {
    for(let i = 0; i < t.length; i++){
        if(t.length > )
    }
};
console.log(findTheDifference("abcd", "abcde"))