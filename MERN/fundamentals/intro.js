// var x;

// var x = "Hey it's me!";
console.log(x);


function changestring(){
    // function scoped; it stays in the function
    var other = "Try to print the secret message!";
    x = "changed";
}

function unchangeString(){
    x = "Hey it's me!";
}

var x = "Hey it's me!";


console.log(x);
changestring();
console.log(x);
unchangeString();
console.log(x);

console.log(other);

// Variables Matt likes: Let, const
// Let variables are block scope

// console.log(x);
// let x = "Hey it's me!";

// // for(var i = 0; i < 100; i++){}

// if(50 < 100){
//     let i = "Hey again!";
// }
// console.log(i);

const numOfStudents = 27;
console.log(numOfStudents);
// const variables cannot be reassigned
// numOfStudents++;
// numOfStudents = 47;


// Destructuring with an array
const faveNums = [4,8,15,16,23,42];
const [first, second, banana,,other] = faveNums;
// let [first, ...others] = faveNums;
first = 14;
faveNums[5] = 68;
const newList = [1, ...faveNums, 99];
console.log(newList);


// destructuring and array the ORDER matters


// faveNums[5] = 68;
// console.log(faveNums);




// const sundae = {
//     sauce: "hot fudge",
//     flavor: "vanilla",
//     topping: "pecans"
// }

// // destructuring an object ; the NAME matters
// const {flavor, ...chocolateSoup} = sundae;
// sundae.topping = "peanuts";
// console.log(chocolateSoup);

// let jumboSundae = {
//         ...sundae,
//         whippedCrem: true,
//         cherry: true,
//         sprinkles: "rainbow",
//         fruit: "pineapple"
// }

// console.log(jumboSundae);