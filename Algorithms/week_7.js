// First week of JAVA! But first, algos.

// Monday

// Balanced point and balanced index

// balancePoint(arr)
// [1, 2, 3, 4, 10] = True
// [1, 2, 3, 2, 1] = False


// balanceIndex(arr)

// [1, 2, 3, 2, 1] = true    <-Because 1+2=3 on both ends.

Balance Point and Balance Index!!!

// WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE POINT BETWEEN THE VALUES
// WHERE ONE SIDE IS EQUAL TO THE OTHER

function balancePoint(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j = i; j++) {
            var sum1 = 0
            sum1 = + arr[j]
        }
        for (var k = arr.length - 1; k = i; k--) {
            var sum2 = 0
            sum2 = + arr[k]
        }
    }
}

function balancePoint(arr) {
    for (var i = 0; i < arr.length; i++) {
        var placeholder = arr[0]
        for (var j = arr.length - 1; j = i; j--) {
            if (i != j) {
                arr[j] += 
            }
        }
    }
}
console.log(balancePoint([1, 2, 3, 4, 10])) // TRUE
// ---> 1+2+3+4 = 10     10 == 10 so balanced
// console.log(balancePoint([1,2,3,2,1])) // FALSE
// console.log(balancePoint([1,2,3,1,2,3,2,1])) // FALSE
// console.log(balancePoint([2,2])) // TRUE

function balanceIndex(arr) {
}

// console.log(balanceIndex([-2,5,7,0,3]))  // TRUE
// console.log(balanceIndex([9,9])) // FALSE
// console.log(balanceIndex([4,2,2,6])) // TRUE
// console.log(balanceIndex([9,1,9])) // TRUE
// console.log(balanceIndex([1,8,1,2,3,4])) // TRUE

// Other solution

function balancePoint(arr) {
    var sum = arr[0];
    var arrSum = 0;
    for (var i = arr.length - 1; i > 0; i--) {
        arrSum += arr[i]
        for (var j = 1; j < arr.length; j++) {
            if (arr[2] == null) {
                if (sum = arrSum) {
                    return true
                }
            }
            sum += arr[j]
            if (arrSum == sum) {
                return true
            }
        }
    }
    return false
}

console.log(balancePoint([2, 2, 4]))
console.log(balancePoint([1, 2, 3, 4, 10])) // TRUE
// ---> 1+2+3+4 = 10     10 == 10 so balanced
console.log(balancePoint([1, 2, 3, 2, 1])) // FALSE
console.log(balancePoint([1, 2, 3, 1, 2, 3, 2, 1])) // FALSE
console.log(balancePoint([2, 2])) // TRUE


//  Tuesday

// Binary Search

// Given a sorted array and a value, return whether
//  the array contains that value. Do not sequentially 
//  iterate the array. Instead 'divide and conquer'. 
//  Taking advantage of the fact that array is sorted. 


function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === val) {
            return true;
        }

        if (val < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 10], 9));
// ---> 1 2 3 4 5  |  6 7 8 9 10
// ---> 6 7  |  8 9 10
// ---> 8  [9]  10  (found)








// Remove duplicates
// Wednesday

// Try to accomplish this without creating another array. 

// GIVEN AN ARRAY, RETURN ARRAY WITHOUT DUPLICATES
// [1,2,1,3,4,2] => [1,2,3,4]

// CHALLENGE RETURN THE SAME ARRAY




function removeDupe(arr) {
    var dad = []
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            console.log("arr[i]" + arr[i])
            console.log("arr[j]" + arr[j])
            if (arr[j] != arr[i]) {
                dad.push(arr[i])
                console.log("HEY MAN")
            }
        }
    }
    return dad
}

console.log(removeDupe([8, 9, 9, 10, 2, 2, 34]))








// The actual solution.

function removeDupe(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            console.log("arr[i]" + arr[i])
            console.log("arr[j]" + arr[j])
            if (arr[j] === arr[i]) {
                arr.splice(j, 1)
            }
        }
    }
    return arr
}

console.log(removeDupe([8, 9, 9, 10, 2, 2, 34]))

// The actual solution ^^^^^^^^^^^^








// 



function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

// usage example:
var a = [1, 2, 1, 3, 4, 2];
var unique = a.filter(onlyUnique);

console.log(unique);


// Thursday algos

// Problem
// Two robots land with their parachutes on an infinite one-dimensional number line. 
// They both release their parachutes as soon as they land and start moving. 
// They are allowed only to make use of the following functions.


// I. moveLeft() // robot moves to left by 1 unit in 1 unit time

// II. moveRight() // robot moves to right by 1 unit in 1 unit time

// III. noOperation() // robot does not move and takes 1 unit time

// IV. onTopOfParachute() // returns true if the robot is standing on top of either of the parachute, else false

// V. didWeMeet() // returns true if the robot meets to the other robot, else false



// Write a function in order to make the robots meet each other. Robots will be executing the same copy of this function.


// Friday!

// Matrix Search

var big = [
    [67, 34, 45, 56],
    [98, 87, 76, 65],
    [56, 67, 78, 89],
    [54, 43, 32, 21]
];

var small = [
    [67, 78],
    [43, 32]
];

var anotherSmall = [
    [67, 7],
    [43, 32]
];


function matrixSearch(larger, smaller) {
    for (var i = 0; i < smaller.length; i++) {
        for (var j = 0; j < smaller[i].length; j++) {
            console.log(smaller[i])
            for (var k = 0; k < larger.length; k++) {
                for (var l = 0; l < larger[k].length; l++) {
                    if (smaller[i][j] == larger[k][l]) {
                        return true
                    }
                }
            }
        }
    }
}
    console.log(matrixSearch(big, small))
    console.log(matrixSearch(big, anotherSmall))



//     for(var i = 0; i < small.length; i++){
//         if(big.includes(small[i])){
//             console.log(small[i])
//         }
//     }
// }

