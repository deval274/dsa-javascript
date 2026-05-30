// write an function that return the count of the negative number from the array.

let arr = [1, 5, 9, -2, -7, -4, 4, 0, -8];
function countNegativeNumber() {
    let countNegative = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            countNegative += 1;
        }
    }
    return "Counts of negative number is = " + countNegative;
}
console.log(countNegativeNumber());