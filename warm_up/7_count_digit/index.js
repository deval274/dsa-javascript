// function countDigit(num) {
//     let counter = 0;
//     if (num < 0) {
//         while (num < 0) {
//             num = Math.ceil(num / 10);
//             counter++;
//         }
//     }
//     else {
//         while (num > 0) {
//             num = Math.floor(num / 10);
//             counter++;
//         }
//     }
//     return counter;
// }

function countDigit(num) {
    if (num === 0) return 1;
    let counter = 0;
    num = Math.abs(num); // convert negative to positive
    while (num > 0) {
        num = Math.floor(num / 10);
        counter++;
    }
    return counter;
}

let num = -234; //3

console.log(countDigit(-234));
console.log(-234 / 10)
console.log(Math.ceil(-234 / 10))
console.log(Math.ceil(-23 / 10))
console.log(Math.round(236 / 10))

