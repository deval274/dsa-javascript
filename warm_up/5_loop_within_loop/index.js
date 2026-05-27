// loop within a loop concept

// for (let i = 0; i < 3; i++)
// {
//     for(let j = 0; j < 3; j++)
//     {
//         console.log("i = " + i + " j = " + j);
//     }
// }

// example-1
// for (let i = 0; i < 3; i++)
// {
//     for(let j = 0; j < i; j++)
//     {
//         console.log("i = " + i + " j = " + j);
//     }
// }

// example-2
// for (let i = 0; i < 3; i++)
// {
//     for(let j = 0; j <= i; j++)
//     {
//         console.log("i = " + i + " j = " + j);
//     }
// }

// example-3
// for (let i = 0; i < 3; i++)
// {
//     for(let j = i; j > 0; j--)
//     {
//         console.log("i = " + i + " j = " + j);
//     }
// }

//example-4
// for (let i = 5; i > 0; i--)
// {
//     for(let j = 0; j < i; j++)
//     {
//         console.log(i,j);
//     }
// }


var secondHighest = function(s) {
    let arr = [];
    for(let i of s){
        if(!isNaN(i)){
            arr.push(Number(i));
        }
    }
    console.log(arr);
};

secondHighest("dfa12321afd")
