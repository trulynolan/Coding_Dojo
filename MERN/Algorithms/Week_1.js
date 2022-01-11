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