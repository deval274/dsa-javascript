/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// 1st approach
var reverseString = function(s) {
    let i=0;
    let j=s.length-1;
    while(i<j){
        [s[i], s[j]]=[s[j], s[i]]
        i++;
        j--;
    }
    return s;
};

// 2nd approach
var reverseString = function(s) {
    let n=Math.floor(s.length/2);
    let len=s.length
    for(let i=0;i<n;i++){
        let temp = s[i];
        s[i]=s[len-1-i];
        s[len-1-i]=temp
    }
    return s;
};