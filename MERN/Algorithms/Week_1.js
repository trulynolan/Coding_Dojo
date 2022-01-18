// Monday

function bubbleSort(arr){
    var swapped = true;
    while(swapped){
        swapped = false;
        for(var i = 0; i < arr.length - 1; i++){
            // console.log(`${arr[i]}, ${arr[i+1]}`);
            if(arr[i] > arr[i+1]){
                swapped = true;

                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            } 
        }
    }
    
    return arr;
}


let arr = [5,4,2,6,8,14,1,3];
console.log(arr);
console.log(bubbleSort(arr));

// Selection Sort Demo

function selectionSort(arr){
    for(var minStart = 0; minStart < arr.length; minStart++){
        var min = minStart;
        for(var i = min + 1; i < arr.length; i++){
            if(arr[min] > arr[i]){
                min = i;
            }
        }
        var temp = arr[min];
        arr[min] = arr[minStart];
        arr[minStart] = temp;

        console.log(arr);
    }
    
    return arr;
}

console.log(selectionSort([5,4,2,6,8,14,1,3]));

// Tuesday
const combine = (leftArr, rightArr) => {
    for(var i = 0; i < rightArr.length; i++){
        leftArr.push(rightArr[i]);
    }
    // leftArr.push(...rightArr);
    for(var i = 0; i < leftArr.length; i++){
        for(var j = i + 1; j < leftArr.length; j++){
            if(leftArr[i] > leftArr[j]){
                temp = leftArr[i];
                leftArr[i] = leftArr[j];
                leftArr[j] = temp;
            }
        }
    }
    return leftArr;
}
console.log(combine([1,2,7,9],[0,3,4,6,11]));
console.log(combine([1],[0]));

// 

const combine = (leftArr, rightArr) => {
    let result = [];

    // for(let i = 0; i < leftArr.length; i++) {
    while(leftArr.length && rightArr.length) {
        if(leftArr[0] <= rightArr[0]) {
            result.push(leftArr.shift())
        } else {
            result.push(rightArr.shift())
        }
    }
    return [...result, ...leftArr, ...rightArr];
}

console.log(combine([1,2,7,9],[0,3,4,6,11]));

// 

const combine = (leftArr, rightArr) => {
    console.log(leftArr);
    let left = 0;
    let right = 0;
    let newArr = [];
    while(left < leftArr.length || right < rightArr.length){
        if(left >= leftArr.length){
            newArr.push(rightArr[right]);
            ++right;
        }
        else if(right >= rightArr.length){
            newArr.push(leftArr[left]);
            ++left;
        }
        else if(left < leftArr.length && leftArr[left] < rightArr[right]){
            newArr.push(leftArr[left]);
            ++left;
        }
        else{
            newArr.push(rightArr[right]);
            ++right;
        }
    }
    return newArr;
}

const mergeSort = (arr) => {
    if(arr.length < 2){
        return arr;
    }
    const left = arr.slice(0, arr.length/2);
    const right = arr.slice(arr.length/2, arr.length);
    return combine(mergeSort(left), mergeSort(right));
}

//should return [1,2,3,4,5,6,8,14]
console.log(mergeSort([5,4,2,6,8,14,1,3,11]));






// Wednesday
//partition the array around the value at arr[0]
//without creating a new array
//values left of the original pivot should be less than the pivot
//values right of the pivot should be >= the pivot value
//note: each side of the partitioned value does not
//have to be sorted.
//return the newly partitioned array
//bonus: return the index where the value at 0 ends up
//[5,4,9,2,5,3] -> [4,2,3,5,9,5], return 3
// Loop through the array
// Get value of [0]
// if(arr[i+1] < arr[0])
// Put value at index [0]
const partition = (arr) => {
    const pivot = arr[0];
    for(var i = 0; i< arr.length; i++){
        if(arr[i+1] < pivot){
            //put value at index 0
            // console.log(`${arr[i+1]} is less than ${pivot} so it needs to be moved.`);
            const temp = arr[i+1];
            arr.splice(i+1,1);
            arr.unshift(temp);
        }
    }
    return arr;
}

//should return [4,2,3,5,9,5]
console.log(partition([5,4,9,2,5,3]));
//should return [4,7]
console.log(partition([7,4]));
//should return [2,1,3,4,5]
console.log(partition([3,5,1,2,4]));

console.log(partition([7,2,10,15,1]));

// 

function wordArray(str) {
    let array = [];
    let word = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " " && str[i + 1] !== " ") {
              if(word !== ""){
                array.push(word);
                word = "";
               }
        } else if (str[i] !== " ") {
            word += str[i];
        }
    }
    array.push(word);
    return array;
}
console.log(wordArray("super cool word splitting           thing"));
console.log(wordArray("Did I shine my   shoes today?"));

function reverseWordOrder(str) {
    let word = wordArray(str);
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i] + " ";
    }
    return reversed;
}

console.log(wordReverse("super cool word splitting thing "));