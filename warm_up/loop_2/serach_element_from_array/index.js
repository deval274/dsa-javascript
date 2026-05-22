// write a function that searches for element in the array and if the element present then return the index and if not then return the -1.

let arr = [3, 6, 9, 2, 10, 1];
function findElement(number) { 
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === number) {
            return "number was " + arr[i] + " and the index is " + i;
        }
    }
    return -1;
}
console.log(findElement(9));