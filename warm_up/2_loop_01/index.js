// print the even number from the loop
let arr = [2, 5, 7, 0, 23, 65, 10, 56];

let arrLength = arr.length;

for (let i = 0; i < arrLength; i++){
    if (arr[i] % 2 == 0) {
        console.log(arr[i] + " is even number and index is "+ i);
    } else {
        continue;
    }
}

// while loop

let j = 0;
while (j < 5) {
    console.log("current index = " + j)
    j++;
}