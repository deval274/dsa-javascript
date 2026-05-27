/**
 * @param {string} s
 * @return {number}
 */
// var secondHighest = function(s) {
//     let largest = -Infinity;
//     let secondLargest = -Infinity;

//     for(let c of s){
//         if(/^[0-9]$/.test(c)){
//             let num = Number(c);

//             if(largest<num){
//                 secondLargest = largest;
//                 largest = num;
//             }
//             else if(secondLargest<num && num<largest){
//                 secondLargest = num
//             }
//         }
//     }
//     return secondLargest===-Infinity ? -1 : secondLargest ;
// };

var secondHighest = function(s) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let c of s){
        if(!isNaN(c)){
            let num = Number(c);

            if(largest<num){
                secondLargest = largest;
                largest = num;
            }
            else if(secondLargest<num && num<largest){
                secondLargest = num
            }
        }
    }
    return secondLargest===-Infinity ? -1 : secondLargest ;
};

//https://leetcode.com/problems/second-largest-digit-in-a-string/