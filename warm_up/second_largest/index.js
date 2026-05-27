// base version

// let arr = [1, 3, 7, 5, 9, 2];

// function secondLargest(arr) {
//     let largest = -Infinity;
//     for (let i = 0; i < arr.length; i++){
//         if (largest < arr[i]) {
//             largest = arr[i];
//         }
//     }
//     let secondLargest = -Infinity
//     for (let i = 0; i < arr.length; i++){
//         if (secondLargest<arr[i] && arr[i] < largest) {
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
// }

// console.log(secondLargest(arr));
// time complexity = O(n) + O(n) => O(2n)



// base version with edge cases

// let arr = [1, 3, 7, 5, 9, 2];
// let arr1 = [];
// let arr2 = [9, 9, 9, 9];
// let arr3 = [3];
// let arr4 = [6, 4];

// function secondLargest(arr) {
//     if (arr.length < 2) {
//         return "length should be min 2"
//     }
//     let largest = -Infinity;
//     for (let i = 0; i < arr.length; i++){
//         if (largest < arr[i]) {
//             largest = arr[i];
//         }
//     }
//     // return largest;
//     let secondLargest = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (secondLargest<arr[i] && arr[i] < largest) {
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
// }

// console.log(secondLargest(arr2));
// time complexity = O(n) + O(n) => O(2n)





// optimized version
let arr = [1, 3, 7, 5, 9, 2];
let arr1 = [9, 9, 9, 9];
let arr2 = [];
let arr3 = [3, 4];
let arr4 = [3];
let arr5 = [-2, -6, -1, -9];
let arr6 = [-9, -9, -9, -9];


function secondLargest(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    if (arr.length < 2) {
        return "length should be min 2"
    }
    for (let i = 0; i < arr.length; i++){
        if (firstLargest < arr[i]) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if (secondLargest < arr[i] && arr[i] < firstLargest) {
            secondLargest = arr[i];
        }
    }
    if (secondLargest === -Infinity) return "array contains same numbers";
    return secondLargest;
}
console.log(secondLargest(arr6));

// time complexity = O(n)