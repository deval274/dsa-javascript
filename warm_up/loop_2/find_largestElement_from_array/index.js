// write the fucntion that return the largets number from the array.

let arr = [-10, -9, -20, -4];
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [ ];
let arr3 = [5];

function findLargestNumberBase(arr) {
    let largestNumber = 0;
    for (let i = 0; i < arr.length; i++){
        if (largestNumber < arr[i]) {
            largestNumber = arr[i];
        }
    }
    return largestNumber;
}

function findLargestNumberHandleNegative(arr) {
    let largestNumber = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (largestNumber < arr[i]) {
            largestNumber = arr[i];
        }
    }
    return largestNumber;
}

function findLargestNumberOptimized(arr) {
    let largestNumber = -Infinity;
    if (arr.length === 0) {
        return "Array is empty so we cant find the largest number"
    }
    for (let i = 0; i < arr.length; i++) {
        if (largestNumber < arr[i]) {
            largestNumber = arr[i];
        }
    }
    return largestNumber;
}

console.log(findLargestNumberHandleNegative(arr));
console.log(findLargestNumberBase(arr1));
console.log(findLargestNumberOptimized(arr3));
console.log(findLargestNumberOptimized(arr2));
