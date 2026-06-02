//1st approach
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let result=0;
    let curr=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            curr += 1;
            if(curr>result){
                result=curr
            }
        }
        else{
            curr = 0
        }
    }
    return result;
};

//2nd approach
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCount=0;
    let currCount=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            currCount++;
        }
        else{
            maxCount = Math.max(maxCount, currCount);
            currCount = 0
        }
    }
    return Math.max(maxCount, currCount);
};