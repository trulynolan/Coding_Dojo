// 1 
console.log(hello);                                  
var hello = 'world';   // Undefined; it won't work becuase the var hello is not yet defined.

// 2
var needle = 'haystack';
test(); //Doing nothing
function test(){
    var needle = 'magnet';
    console.log(needle);
} 
//Output "Magnet."

// 3 
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan); // "Only okay"
}
console.log(brendan); // "Super cool" because this console.log is outside of the function.

// 4
var food = 'chicken';
console.log(food); //chicken
eat();
function eat(){
    food = 'half-chicken';
    console.log(food); //half-chicken
    var food = 'gone'; //nothing happens with this
}

//5
mean(); //nothing happens/error
console.log(food); // undefined
var mean = function() { //var should be at the top
    food = "chicken";
    console.log(food); //chicken
    var food = "fish";
    console.log(food); // fish
}
console.log(food); //undefined

//6 
console.log(genre); //No var defined above
var genre = "disco"; // Should be switched with the above
rewind(); //useless
function rewind() {
    genre = "rock";
    console.log(genre); //undefined
    var genre = "r&b";
    console.log(genre); //r&b
}
console.log(genre); //disco; dangit that was good.

//7
dojo = "san jose"; //
console.log(dojo); //San Jose
learn();
function learn() {
    dojo = "seattle"; 
    console.log(dojo); //seattle
    var dojo = "burbank"; 
    console.log(dojo); //burnank
}
console.log(dojo); //san jose







