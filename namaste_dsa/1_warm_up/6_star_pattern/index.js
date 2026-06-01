// 1

// ****
// ****
// ****
// ****

// let n = 4;
// for (let i = 0; i < n; i++){
//     let row=""
//     for (let j = 0; j < n; j++) {
//         row = row + "* ";
//     }
//     console.log(row);
// }



// 2

// *
// **
// ***
// ****

// let n = 4;
// for (let i = 0; i < n; i++){
//     let row = "";
//     for (let j = 0; j <= i; j++){
//         row = row + "* ";
//     }
//     console.log(row);
// }



// 3

// 1
// 12
// 123
// 1234
// 12345

// let n = 5;
// for (let i = 0; i < n; i++){
//     let row = "";
//     for (let j = 0; j <= i; j++){
//         row = row + (j+1);
//     }
//     console.log(row);
// }



// 4

// 1
// 22
// 333
// 4444
// 55555

// let n = 5;
// for (let i = 0; i < n; i++){
//     let row = "";
//     for (let j = 0; j <= i; j++){
//         row = row + (i+1);
//     }
//     console.log(row);
// }



// 5

// 12345
// 1234
// 123
// 12
// 1

// let n = 5;
// for (let i = n; i > 0; i--){
//     let row = "";
//     for (let j = 0; j < i; j++){
//         row = row + (j+1);
//     }
//     console.log(row);
// }

// let n = 5;
// for (let i = 0; i < n; i++){
//     let row = "";
//     for (let j = 0; j < n-i; j++){
//         row = row + (j+1);
//     }
//     console.log(row);
// }



// 6

// 55555
// 4444
// 333
// 22
// 1

// let n = 5;
// for (let i = n; i > 0; i--){
//     let row = "";
//     for (let j = 0; j < i; j++){
//         row = row + (i);
//     }
//     console.log(row);
// }



//7

// *****
// ****
// ***
// **
// *

// let n = 5;
// for (let i = 0; i < n; i++){
//     let row = "";
//     for (let j = 0; j < n-i; j++){
//         row = row + ("* ");
//     }
//     console.log(row);
// }



//8
//     *
//    **
//   ***
//  ****
// *****

// let n = 5;
// for (let i = 0; i < n; i++){
//     let row = "";
//     // for space
//     for (let j = 0; j < n-(i+1); j++){
//         row = row + " ";
//     }
//     for (let k = 0; k <= i; k++){
//         row = row + "*";
//     }
//     console.log(row);
// }



// 9
// 1
// 10
// 101
// 1010
// 10101
// 101010

// let n = 5;
// for (let i = 0; i < n; i++){
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//         if (j % 2 === 0) row = row + "1";
//         else row = row+"0"
//     }
//     console.log(row);
// }
// let n = 5;
// for (let i = 0; i < n; i++) {
//     let row = "";
//     let toggle = 1;
//     for (let j = 0; j <= i; j++) {
//         row = row + toggle;
//         if (toggle === 1) toggle = 0;
//         else toggle = 1;
//     }
//     console.log(row);
// }



// 10

// 1
// 01
// 010
// 1010
// 10101


// let n = 5;
// let toggle = 1;
// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//         row = row + toggle;
//         if (toggle === 1) toggle = 0;
//         else toggle = 1;
//     }
//     console.log(row);
// }


