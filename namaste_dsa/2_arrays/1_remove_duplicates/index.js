var removeDuplicates = function(nums) {
    let k=1;
    for(let j=1;j<nums.length;j++){
        if(nums[j] !== nums[k-1]){
            nums[k]=nums[j];
            k++;
        }
    }
    return k;
};

var removeDuplicates = function(nums) {
    let k=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]>nums[k]){
            k++;
            nums[k]=nums[i];
        }
    }
    return (k+1);
};